import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { DeleteUserController } from "../controllers/DeleteUserController";

export const userRoutes = Router();

const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();

userRoutes.post("/", createUserController.handle);
userRoutes.delete("/", deleteUserController.handle)