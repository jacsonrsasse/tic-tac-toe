import { Observer } from "@shared/types/observer.type";

export interface WebSocketAdapterInterface {
  connect: () => void;
  registerObserver: (observer: Observer) => void;
}
