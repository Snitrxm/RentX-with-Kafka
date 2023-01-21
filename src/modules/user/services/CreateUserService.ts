import { User } from "@prisma/client";
import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { KafkaAdpter } from "../../../lib/kafka";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUsersRepository } from "../repositories/IUsersRepository";

@injectable()
export class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {
    //
  }

  async execute({ email, name, password }: ICreateUserDTO): Promise<User> {
    const userExists = await this.usersRepository.findByEmail(email);
    
    if (userExists) {
      throw new Error("User already exists");
    }

    const hashPasword = await hash(password, 8);
    const user = await this.usersRepository.create({
      email,
      name,
      password: hashPasword,
    });

    const kafka = new KafkaAdpter();
    await kafka.connect();
    await kafka.sendMessage({
      message: JSON.stringify(user),
      topic: "test-topic",
    });

    return user;
  }
}
