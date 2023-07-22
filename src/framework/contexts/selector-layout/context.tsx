/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext } from "react";

export type SelectorLayoutContextData = {
  selector: string;
};

export const InternalSelectorLayoutContext =
  createContext<SelectorLayoutContextData>(null!);

export const SelectorLayoutContext = ({
  children,
  selector,
}: {
  selector: string;
  children: ReactNode;
}) => {
  return (
    <InternalSelectorLayoutContext.Provider
      value={{
        selector,
      }}
    >
      {children}
    </InternalSelectorLayoutContext.Provider>
  );
};
