import { Request, Response } from "express";
import { injectable } from "inversify";

@injectable()
export class LoginController {
  login(request: Request, response: Response) {
    response.json({
      statusCode: 200,
      message: {
        ip: request.ip,
      },
    });
  }
}
