import { ReactNode } from "react";
import { Portal } from "../Portal";

interface Props {
  children: ReactNode;
}

export const FloatCards: React.FC<Props> = ({ children }) => (
  <Portal elementId="Cards">
    <div
      style={{
        position: "relative",
        border: "none",
        height: "auto",
        justifyContent: "center",
        display: "flex",
      }}
    >
      {children}
    </div>
  </Portal>
);
