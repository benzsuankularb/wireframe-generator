/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useContext } from "react";
import { useSchema } from "..";
import { SelectorSchema } from "../../schemas";
import { InternalSelectorLayoutContext } from "./context";

export const useSelectorSchema = (name: string) => {
  const ctx = useContext(InternalSelectorLayoutContext);
  const { selector: selectorName } = ctx;
  const selector = useSchema(selectorName) as SelectorSchema;
  const schema = useSchema(name);
  const selectorSchema = (selector.actions ?? {})[name];
  const { exports, imports } = selectorSchema;
  return { schema, exports, imports };
};

export const useSelector = () => {
  const ctx = useContext(InternalSelectorLayoutContext);
  const { selector } = ctx;
  const selectorSchema = useSchema(selector) as SelectorSchema;
  return { selectorSchema };
};
