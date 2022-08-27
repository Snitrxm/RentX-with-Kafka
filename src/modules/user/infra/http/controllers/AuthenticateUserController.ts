import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserService } from "../../../services/AuthenticateUserService";

export class AuthenticateUserController {
    constructor() {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        const authenticateUserService = container.resolve(AuthenticateUserService);

        const user = await authenticateUserService.execute(email, password);

        return res.status(200).json(user);
    }
}