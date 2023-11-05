import WebSocketInterface from "../interfaces/services/web-socket.interface";

export default class WebSocketService implements WebSocketInterface {
  connect() {
    console.log("Vai conectar");
    return "";
  }
}
