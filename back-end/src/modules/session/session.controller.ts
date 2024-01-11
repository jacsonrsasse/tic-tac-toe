import { Request, Response } from "express";
import routeParamsMiddleware from "@shared/middlewares/route-params.middleware";

import {
  controller,
  httpDelete,
  httpPost,
  interfaces,
  requestParam,
  response,
} from "inversify-express-utils";

import { DeleteSessionUseCase } from "./use-cases/delete-session.usecase";
import { CreateSessionUseCase } from "./use-cases/create-session.usecase";

import { createSessionDto } from "./dto/create-session.dto";
import { deleteteSessionDto } from "./dto/delete-session.dto";

@controller("/session")
export class SessionController implements interfaces.Controller {
  constructor(
    private readonly createSessionUseCase: CreateSessionUseCase,
    private readonly deleteSessionUseCase: DeleteSessionUseCase
  ) {}

  @httpPost("/login", routeParamsMiddleware(createSessionDto))
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

  @httpDelete("/logout/:id", routeParamsMiddleware(deleteteSessionDto))
  async delete(@requestParam("id") id: number, @response() response: Response) {
    const user = await this.deleteSessionUseCase.execute({
      id: Number(id),
    });
    console.log(user);

    response.status(200).send({
      message: "Logout successfull",
    });
  }
}
