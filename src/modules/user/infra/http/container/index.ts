import { container } from "tsyringe";
import { UsersRepository } from "../../../repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);