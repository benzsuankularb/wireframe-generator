/* eslint-disable @typescript-eslint/no-explicit-any */

import { TypeDefinition } from "./data-types";

export type ActionSchema = {
  type: "action";
  global?: boolean;
  allowBulk?: boolean;
  fields: { [name: string]: ActionSchema_Field };
  layout: { [name: string]: ActionSchema_LayoutItem };
};

export type ActionSchema_Field = {
  typeDef: TypeDefinition;
  required?: boolean;
  allowBulk?: boolean;
  readOnly?: boolean;
  external?: boolean;
  suggestion?: boolean;
  suggestionDeps?: string[];
  docs?: string[];
  samples?: string[];
};

export type ActionSchema_LayoutItem = {
  component: string;
  size?: "1/2" | "1";
  attributes?: { [key: string]: any };
  target?: string | { [key: string]: string }; //TODO remove
  source?: string | { [key: string]: string }; //TODO remove
  docs?: string[];
  samples?: string[];
};
