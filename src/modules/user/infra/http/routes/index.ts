import { Router } from "express";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { CreateUserController } from "../controllers/CreateUserController";
import { DeleteUserController } from "../controllers/DeleteUserController";
import { FindUserByEmailController } from "../controllers/FindUserByEmailController";

export const userRoutes = Router();

const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();
const authenticateUserController = new AuthenticateUserController();
const findUserByEmailController = new FindUserByEmailController();

userRoutes.post("/", createUserController.handle);
userRoutes.post("/login", authenticateUserController.handle);
userRoutes.delete("/", deleteUserController.handle);
userRoutes.get("/:email", findUserByEmailController.handle);
