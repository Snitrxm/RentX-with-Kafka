import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";

@injectable()
export class DeleteUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ){
    //
  }

  async execute(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}