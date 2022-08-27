import { User } from "@prisma/client";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

export interface IUsersRepository {
  create({ email,name,password }:ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<User>;
}