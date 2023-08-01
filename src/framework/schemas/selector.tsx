/* eslint-disable @typescript-eslint/no-explicit-any */

import { TypeDefinition } from "./data-types";

export type SelectorSchema = {
  type: "selector";
  class?: string;
  globalFields?: { [name: string]: SelectorSchema_GlobalField };
  fields?: { [name: string]: SelectorSchema_Field };
  schemas?: { [name: string]: SelectorSchema_Schema };
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

export type SelectorSchema_Schema = {
  exports?: { [targetField: string]: string };
  imports?: { [targetField: string]: string };
};

export type SelectorSchema_Layout = {
  component: string;
  attributes: { [key: string]: any };
};
