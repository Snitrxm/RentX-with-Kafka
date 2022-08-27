import { Router } from "express";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { CreateUserController } from "../controllers/CreateUserController";
import { DeleteUserController } from "../controllers/DeleteUserController";
import { UploadPhotoController } from "../controllers/UploadPhotoController";

export const userRoutes = Router();

const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();
const authenticateUserController = new AuthenticateUserController();
const uploadPhotoController = new UploadPhotoController();

userRoutes.post("/", createUserController.handle);
userRoutes.post("/login", authenticateUserController.handle);
userRoutes.delete("/", deleteUserController.handle)

userRoutes.post("/upload", uploadPhotoController.handle);
