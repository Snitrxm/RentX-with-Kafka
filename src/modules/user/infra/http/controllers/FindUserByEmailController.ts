import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindUserByEmailService } from "../../../services/FindUserByEmailService";

export class FindUserByEmailController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email } = req.params;

    const findUserByEmailService = container.resolve(FindUserByEmailService);
    const user = await findUserByEmailService.execute(email);

    return res.status(200).json(user);
  }
}