import { Container } from "inversify";

// modules
import { sharedModule } from "@shared/shared.inversify";
import { webSocketModule } from "@modules/web-socket/web-socket.inversify";
import { sessionModule } from "@modules/session/session.inversify";
import { userModule } from "@modules/users/user.inversify";

const inversifyConfig = (() => {
  let container = new Container({ autoBindInjectable: true });

  container.load(sharedModule);
  container.load(webSocketModule);
  container.load(sessionModule);
  container.load(userModule);

  const getContainer = () => {
    return container;
  };

  return {
    getContainer,
  };
})();

export const getContainer = inversifyConfig.getContainer;
