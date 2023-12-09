import { Observer } from "@shared/types/observer.type";

export interface WebSocketAdapterInterface {
  connect: () => void;
  addObserver?: (observer: Observer) => void;
}
