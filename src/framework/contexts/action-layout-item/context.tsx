/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext } from "react";

export type ActionLayoutContextData = {
  action: string;
  itemId: string;
};

export const InternalActionLayoutItemContext =
  createContext<ActionLayoutContextData>(null!);

export const ActionLayoutItemContext = ({
  children,
  action,
  itemId,
}: {
  action: string;
  itemId: string;
  children: ReactNode;
}) => {
  return (
    <InternalActionLayoutItemContext.Provider
      value={{
        action,
        itemId,
      }}
    >
      {children}
    </InternalActionLayoutItemContext.Provider>
  );
};
