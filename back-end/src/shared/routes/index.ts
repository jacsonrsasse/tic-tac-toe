import { Request, Response, Router } from "express";
import PlayersController from "../../modules/players/players.controller";
import PlayerConnectUseCase from "../../modules/players/use-case/player-connect.usecase";
import WebSocketService from "../services/web-socket.service";

const router = Router();

router.get("/connect", (req: Request, res: Response) => {
  const controller = new PlayersController(
    new PlayerConnectUseCase(new WebSocketService())
  );

  controller.connect(req, res);
});

export default router;
