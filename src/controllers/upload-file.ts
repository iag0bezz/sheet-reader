import { Request, Response } from "express";
import { UploadFileUseCase } from "useCases/upload-file";

export class UploadFileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const uploadFileUseCase = new UploadFileUseCase();

    const data = await uploadFileUseCase.execute(request.file, request.query);

    return response.json(data);
  }
}