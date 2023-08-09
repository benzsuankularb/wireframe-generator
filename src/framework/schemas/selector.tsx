/* eslint-disable @typescript-eslint/no-explicit-any */

import { TypeDefinition } from "./data-types";

export type SelectorSchema = {
  type: "selector";
  globalFields?: { [name: string]: SelectorSchema_GlobalField };
  fields?: { [name: string]: SelectorSchema_Field };
  actions?: { [name: string]: SelectorSchema_Action };
  layout: SelectorSchema_Layout;
};

export type SelectorSchema_GlobalField = {
  typeDef: TypeDefinition;
  docs?: string[];
  samples?: string[];
};

export type SelectorSchema_Field = {
  typeDef: TypeDefinition;
  docs?: string[];
  samples?: string[];
};

export type SelectorSchema_Action = {
  exports?: { [targetField: string]: string };
  imports?: { [targetField: string]: string };
};

export type SelectorSchema_Layout = {
  component: string;
  attributes: { [key: string]: any };
};
