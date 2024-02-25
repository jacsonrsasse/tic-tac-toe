import { ContainerModule, interfaces } from "inversify";
import { getContainer } from "./inversify-container";

type AutoBind = {
  [name: symbol]: any;
};

export const inversifyAutoBind = (
  autoBinding: AutoBind,
  bind: interfaces.Bind
) => {
  for (const key in autoBinding) {
    const symbol = key as unknown as symbol;
    const className = autoBinding[symbol];
    bind(symbol).to(className);
  }
};
