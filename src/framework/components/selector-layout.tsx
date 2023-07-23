/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { createElement } from "react";
import { SelectorLayoutContext } from "../contexts/selector-layout";
import { useComponent, useSchema } from "../contexts/wireframe-generator/hook";

export function SelectorLayout({ schema: schemaName }: { schema: string }) {
  const schema = useSchema(schemaName);
  if (schema.type !== "selector") {
    throw "schema used in SelectorLayout must be selector schema";
  }

  const { component: compName, attributes } = schema.layout;
  const comp = useComponent(compName);
  return (
    <SelectorLayoutContext selector={schemaName}>
      {createElement(comp, { ...attributes })}
    </SelectorLayoutContext>
  );
}
