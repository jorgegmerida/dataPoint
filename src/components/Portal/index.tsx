import * as React from "react";
import { createPortal } from "react-dom";

interface Props {
  children?: React.ReactNode;
  elementId: string;
}

export const Portal: React.FC<Props> = ({ children, elementId }) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(children, document.querySelector(`#${elementId}`)!)
    : null;
};
