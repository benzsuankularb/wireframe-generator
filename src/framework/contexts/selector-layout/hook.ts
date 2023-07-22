/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useContext } from "react";
import { useSchema } from "..";
import { SelectorSchema } from "../../schemas";
import { InternalSelectorLayoutContext } from "./context";

export const useSelectorSchemaRef = (name: string) => {
  const ctx = useContext(InternalSelectorLayoutContext);
  const { selector } = ctx;
  const selectorSchema = useSchema(selector) as SelectorSchema;
  const schemaRef = (selectorSchema.schemas ?? {})[name];
  const { schema, exports, imports } = schemaRef;
  return { schema, exports, imports };
};

export const useSelector = () => {
  const ctx = useContext(InternalSelectorLayoutContext);
  const { selector } = ctx;
  const selectorSchema = useSchema(selector) as SelectorSchema;
  return { selectorSchema };
};
