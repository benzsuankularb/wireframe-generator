/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useContext } from "react";
import { useSchema } from "..";
import { ActionSchema } from "../../schemas";
import { InternalActionLayoutItemContext } from "./context";

export const useLayoutItem = () => {
  const ctx = useContext(InternalActionLayoutItemContext);
  const { action, itemId: itemId } = ctx;
  const actionSchema = useSchema(action) as ActionSchema;
  const layoutItemSchema = actionSchema.layout[itemId];
  return { actionSchema, layoutItemSchema };
};

export const useLayoutItemTarget = (id?: string) => {
  const { layoutItemSchema, actionSchema } = useLayoutItem();
  const target =
    id !== undefined
      ? (layoutItemSchema.target as { [key: string]: string })[id]
      : layoutItemSchema.target;
  if (typeof target !== "string") {
    throw `invalid target ${id ?? ""}`;
  }
  const targetSchema = actionSchema.fields[target];
  return { targetSchema };
};

export const useLayoutItemSource = (id?: string) => {
  const { layoutItemSchema, actionSchema } = useLayoutItem();
  const source =
    id !== undefined
      ? (layoutItemSchema.source as { [key: string]: string })[id]
      : layoutItemSchema.source;
  if (typeof source !== "string") {
    throw `invalid source ${id ?? ""}`;
  }
  const sourceSchema = actionSchema.fields[source];
  return { sourceSchema };
};
