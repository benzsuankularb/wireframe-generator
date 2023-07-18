/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useContext } from "react";
import { useSchema } from "..";
import { ActionSchema } from "../../schemas";
import { InternalActionLayoutItemContext } from "./context";

export const useLayoutItem = () => {
  const ctx = useContext(InternalActionLayoutItemContext);
  const { action, itemId: layoutId } = ctx;
  const actionSchema = useSchema(action) as ActionSchema;
  const layoutSchema = actionSchema.layout[layoutId];
  return { actionSchema, layoutSchema };
};

export const useLayoutItemTarget = (id?: string) => {
  const { layoutSchema, actionSchema } = useLayoutItem();
  const target =
    id !== undefined
      ? (layoutSchema.target as { [key: string]: string })[id]
      : layoutSchema.target;
  if (typeof target !== "string") {
    throw `invalid target ${id ?? ""}`;
  }
  const targetSchema = actionSchema.fields[target];
  return { targetSchema };
};

export const useLayoutItemSource = (id?: string) => {
  const { layoutSchema, actionSchema } = useLayoutItem();
  const source =
    id !== undefined
      ? (layoutSchema.source as { [key: string]: string })[id]
      : layoutSchema.source;
  if (typeof source !== "string") {
    throw `invalid source ${id ?? ""}`;
  }
  const sourceSchema = actionSchema.fields[source];
  return { sourceSchema };
};
