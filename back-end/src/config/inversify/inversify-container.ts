import { Container } from "inversify";

// modules
import { sharedModule } from "@shared/shared.module";
import { webSocketModule } from "@modules/web-socket/web-socket.module";
import { sessionModule } from "@modules/session/session.module";
import { userModule } from "@modules/users/user.module";

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
