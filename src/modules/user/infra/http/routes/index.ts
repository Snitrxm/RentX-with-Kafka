import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";

export const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post("/", createUserController.handle);