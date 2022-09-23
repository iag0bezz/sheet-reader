import { Request, Response } from 'express';
import { CreateFileUseCase } from 'useCases/create-file';

export class CreateFileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createFileUseCase = new CreateFileUseCase();

    const type = (request.query.file_type as string) ?? '';

    /*
      NOTE: Require better validation system to improve this. Example: Joi with Middlewares.
    */
    if (type === '') {
      return response.status(400).json({
        error: 'You need provide file_type on query params.',
      });
    }

    const data = await createFileUseCase.execute(request.body, type);

    response.attachment(`file.${type}`);

    return response.send(data);
  }
}
