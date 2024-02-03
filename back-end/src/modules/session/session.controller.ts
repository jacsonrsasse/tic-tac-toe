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

import {
  CreateSessionDtoType,
  createSessionDto,
} from "./dto/create-session.dto";
import { deleteteSessionDto } from "./dto/delete-session.dto";

@controller("/session")
export class SessionController implements interfaces.Controller {
  constructor(
    private readonly createSessionUseCase: CreateSessionUseCase,
    private readonly deleteSessionUseCase: DeleteSessionUseCase
  ) {}

  @httpPost("/login", routeParamsMiddleware(createSessionDto))
  async create(request: Request, response: Response) {
    const {
      body: { nickname, connectionId },
    } = request as CreateSessionDtoType;

    const user = await this.createSessionUseCase.execute({
      ipAddress: request.ip,
      nickname,
      connectionId,
    });

    response.json({
      statusCode: 200,
      message: {
        user,
      },
    });
  }

  @httpDelete("/logout/:id", routeParamsMiddleware(deleteteSessionDto))
  async delete(@requestParam("id") id: string, @response() response: Response) {
    const user = await this.deleteSessionUseCase.execute({
      id,
    });
    console.log(user);

    response.status(200).send({
      message: "Logout successfull",
    });
  }
}
