import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../repositories/IUsersRepository";

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
export class AuthenticateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  public async execute(email: string, password: string): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error("Email or Password Invalid");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email or Password Invalid");
    }

    const token = sign({}, process.env.JWT_SECRET as string, {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenResponse: IResponse = {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };

    return tokenResponse;
  }
}