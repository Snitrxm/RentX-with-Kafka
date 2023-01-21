import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserService } from "../../../services/CreateUserService";

export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, name, password } = req.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({ email, name, password });

    return res.status(201).json(user);
  }
}
