import { User } from "@prisma/client";
import { prisma } from "../../../../prisma";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository{
  findById(id: string): Promise<User> {
    const user = prisma.user.findUnique({
      where: {
        id,
        },
    })

    return user as User | any;
  }
  delete(id: string): Promise<void> {
    const user = prisma.user.delete({
      where: {
        id,
      }
    })

    return user as User | any;
  }
  findByEmail(email: string): Promise<User> {
    const user = prisma.user.findFirst({
      where: {
        email
      }
    });

    return user as User | any;
  }
  async create({ email, name, password }: ICreateUserDTO): Promise<User> {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password
      }
    })

    return user;
  }

}