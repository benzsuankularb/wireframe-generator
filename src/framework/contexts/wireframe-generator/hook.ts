/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useContext } from "react";
import { WireframeGeneratorContext } from "./context";

export const useComponent = (name: string) => {
  const ctx = useContext(WireframeGeneratorContext);
  if (!ctx) {
    console.error("this hook must be use under WireframeGeneratorContext");
    throw "this hook must be use under WireframeGeneratorContext";
  }

  const component = ctx.components[name];
  if (!component) {
    console.error(`component '${name}' not exist`);
    throw `component '${name}' not exist`;
  }

  return component;
};

export const useSchema = (name: string) => {
  const ctx = useContext(WireframeGeneratorContext);
  if (!ctx) {
    console.error("this hook must be use under WireframeGeneratorContext");
  }

  const schema = ctx.schemas[name];
  if (!schema) {
    console.error(`schema '${name}' not exist`);
  }

  return schema;
};
