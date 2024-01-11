import { Observable } from "rxjs";

export interface WebSocketAdapterInterface {
  connect: () => void;
  socketStatus$: () => Observable<boolean>;
}
