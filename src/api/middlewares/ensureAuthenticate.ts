import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../../modules/user/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Error("JWT token is missing");
  }

  const [, token] = authHeader.split(" ");

  const { sub: user_id } = (await verify(
    token,
    process.env.JWT_SECRET as string
  )) as IPayload;

  const usersRepository = new UsersRepository();

  const user = await usersRepository.findById(user_id);

  if (!user) {
    throw new Error("Token is invalid");
  }

  req.user = {
    id: user_id,
  };

  next();
}