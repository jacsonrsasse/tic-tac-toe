import { Request, Response } from "express";
import { injectable } from "inversify";
import { CreateSessionUseCase } from "./use-cases/create-session.usecase";

@injectable()
export class SessionController {
  constructor(private readonly createSessionUseCase: CreateSessionUseCase) {}

  async create(request: Request, response: Response) {
    const user = await this.createSessionUseCase.execute({
      nickname: request.body.nickname,
      ipAddress: request.ip,
    });
    response.json({
      statusCode: 200,
      message: {
        user,
      },
    });
  }
}
