import { SocketIoAdapter } from "@modules/web-socket/adapters/socket-io.adapter";
import { DI } from "@shared/enums/di.enum";
import Container from "typedi";

export const registerDependencies = () => {
  Container.set([{ id: DI.SOCKET_IO_ADAPTER, value: new SocketIoAdapter() }]);
};
