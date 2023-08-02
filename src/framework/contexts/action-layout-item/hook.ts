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

export const useActionField = (id: string) => {
  const ctx = useContext(InternalActionLayoutItemContext);
  const { action } = ctx;
  const actionSchema = useSchema(action) as ActionSchema;
  const fieldSchema = actionSchema.fields[id];
  if (!fieldSchema) {
    throw "invalid field";
  }

  return { fieldSchema };
};
