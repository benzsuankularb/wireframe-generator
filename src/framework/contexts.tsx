/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext } from "react";
import { Schema } from "./schemas";

export type ComponentFactory = any;

export type WireframeGeneratorContextData = {
  components: { [name: string]: ComponentFactory };
  schemas: { [name: string]: Schema };
};

export const WireframeGeneratorContext =
  createContext<WireframeGeneratorContextData>(null!);

export const WireframeGeneratorConfig = ({
  children,
  components,
  schemas,
}: {
  components: { [name: string]: ComponentFactory };
  schemas: { [name: string]: Schema };
  children: ReactNode;
}) => {
  return (
    <WireframeGeneratorContext.Provider
      value={{
        components,
        schemas,
      }}
    >
      {children}
    </WireframeGeneratorContext.Provider>
  );
};
