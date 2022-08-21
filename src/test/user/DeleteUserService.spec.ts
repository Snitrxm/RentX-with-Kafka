import "reflect-metadata";
import { UsersRepository } from "../../modules/user/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/user/repositories/IUsersRepository";
import { CreateUserService } from "../../modules/user/services/CreateUserService";
import { DeleteUserService } from "../../modules/user/services/DeleteUserService";
import { prisma } from "../../prisma"

let deleteUserService: DeleteUserService;
let usersRepository: IUsersRepository;
let createUserService: CreateUserService;

describe("DeleteUserService", () => {
  beforeAll(async () => {
    await prisma.$connect();
    await prisma.$queryRaw`DELETE * FROM users`;
  })

  afterAll(async () => {
    await prisma.$queryRaw`DELETE * FROM users`;
    await prisma.$disconnect();
  })

  beforeEach(async () => {
    usersRepository = new UsersRepository();
    createUserService = new CreateUserService(usersRepository);
    deleteUserService = new DeleteUserService(usersRepository);
  })

  it("Should create a user", async () => {
    const user = await createUserService.execute({
      name: "John Doe",
      password: "123456",
      email: "test@test.com"
    })

    const deletedUser = await deleteUserService.execute(user.id)

    expect(deletedUser).toBeUndefined();
  })

})