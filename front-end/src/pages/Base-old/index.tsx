import BaseDesign from "./Base.style";
import { ReactNode } from "react";

interface baseProps {
  children: ReactNode;
}

function Base({ children }: baseProps) {
  return (
    <BaseDesign>
      <div className="painel">{children}</div>
    </BaseDesign>
  );
}

export default Base;
