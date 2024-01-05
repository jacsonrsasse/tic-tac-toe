import { Request, Response } from "express";
import { Service } from "typedi";

@Service()
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
