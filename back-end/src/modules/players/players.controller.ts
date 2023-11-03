import { Request, Response } from "express";
import UseCaseInterface from "../../shared/interfaces/use-cases/use-case.interface";

export default class PlayersController {
  constructor(private playerConnectUseCase: UseCaseInterface) {}

  connect(req: Request, res: Response) {
    return res.json(this.playerConnectUseCase.execute());
  }
}
