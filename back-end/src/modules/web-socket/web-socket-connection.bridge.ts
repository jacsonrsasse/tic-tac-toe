import { Service } from "typedi";

@Service()
export class WebSocketConnectionBridge {
  private _isConnected = false;

  socketStatusHandler(status: boolean) {
    this._isConnected = status;
  }

  get isConnected(): boolean {
    return this._isConnected;
  }
}
