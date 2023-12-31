/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useContext } from "react";
import { WireframeGeneratorContext } from "./context";

export const useComponent = (name: string) => {
  const ctx = useContext(WireframeGeneratorContext);
  if (!ctx) {
    throw "this hook must be use under WireframeGeneratorContext";
  }

  const component = ctx.components[name];
  if (!component) {
    throw `component '${name}' not exist`;
  }

  return component;
};

export const useSchema = (name: string) => {
  const ctx = useContext(WireframeGeneratorContext);
  if (!ctx) {
    throw "this hook must be use under WireframeGeneratorContext";
  }

  const schema = ctx.schemas[name];
  if (!schema) {
    throw `schema '${name}' not exist`;
  }

  return schema;
};
