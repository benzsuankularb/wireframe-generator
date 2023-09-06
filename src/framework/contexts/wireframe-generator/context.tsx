/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema } from "@sf-cinema/backoffice-schema";
import { ReactNode, createContext } from "react";

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
