/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { createElement } from "react";
import { useComponent, useSchema } from "../hook";

export function SelectorLayout({ schema: schemaName }: { schema: string }) {
  const schema = useSchema(schemaName);
  if (schema.type !== "selector") {
    throw "schema used in SelectorLayout must be selector schema";
  }

  const { component: compName, attributes } = schema.layout;
  const comp = useComponent(compName);
  return createElement(comp, attributes);
}
