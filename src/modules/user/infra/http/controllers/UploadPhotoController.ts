import { Request, Response } from "express";
import { container } from "tsyringe";
import { UploadPhotoService } from "../../../services/UploadPhotoService";

export class UploadPhotoController {
    async handle(req: Request, res: Response): Promise<Response> {
        const uploadPhotoService = container.resolve(UploadPhotoService);
        
        await uploadPhotoService.execute();

        return res.status(200).send({ message: "Ok"});
    }
}