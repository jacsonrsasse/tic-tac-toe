import { Inject, Service } from "typedi";
import { TicTacToeClientSocketEvents } from "./enums/tic-tac-toe-client-socket-events.enum";
import { WebSocketAdapterInterface } from "@shared/interfaces/web-socket-adapter.interface";
import { SocketIoAdapter } from "@modules/web-socket/adapters/socket-io.adapter";
import { DI } from "@shared/enums/di.enum";
import { DrizzleClientService } from "@shared/services/drizzle-client.service";
import { BehaviorSubject } from "rxjs";

@Service()
export default class WebSocketService {
  private _hasSocket = new BehaviorSubject(false);

  get hasSocket$() {
    return this._hasSocket.asObservable();
  }

  constructor(
    @Inject(DI.WEB_SOCKET_ADAPTER)
    private readonly webSocketAdapter: WebSocketAdapterInterface,
    @Inject()
    private readonly drizzleClientService: DrizzleClientService
  ) {
    this.webSocketAdapter.socketStatus$().subscribe((socketStatus: boolean) => {
      this._hasSocket.next(socketStatus);
      console.log(socketStatus);
    });
  }

  connect() {
    this.webSocketAdapter.connect();
  }
}
