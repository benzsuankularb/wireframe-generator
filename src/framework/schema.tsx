/* eslint-disable @typescript-eslint/no-explicit-any */

export type Schema = SelectorSchema | ActionSchema;

export type ActionSchema = {
  type: "action";
  fields: { [name: string]: ActionSchema_Field };
  layout: { [name: string]: ActionSchema_LayoutItem };
};

export type ActionSchema_Field = {
  //
};

export type ActionSchema_LayoutItem = {
  component: string;
  size?: "1/2" | "1";
  attributes?: { [key: string]: any };
};

export type SelectorSchema = {
  type: "selector";
  globalFields?: { [name: string]: SelectorSchema_GlobalField };
  fields?: { [name: string]: SelectorSchema_Field };
  layout: SelectorSchema_Layout;
};

export type SelectorSchema_GlobalField = {
  //
};

export type SelectorSchema_Field = {
  //
};

export type SelectorSchema_Layout = {
  component: string;
  attributes: { [key: string]: any };
};
