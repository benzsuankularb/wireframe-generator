/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { createElement } from "react";
import { useComponent, useSchema } from "../hook";
import { ActionSchema } from "../schema";

export function ActionLayout({ schema: schemaName }: { schema: string }) {
  const schema = useSchema(schemaName);
  if (schema.type !== "action") {
    console.error("schema used in ActionLayout must be action schema");
    throw "schema used in ActionLayout must be action schema";
  }

  const layoutNames = Object.keys(schema.layout);
  const layoutItems = layoutNames.map((name) => (
    <ActionLayoutItem name={name} schema={schema} key={name} />
  ));

  return <div className="w-full">{layoutItems}</div>;
}

function ActionLayoutItem({
  name,
  schema,
}: {
  name: string;
  schema: ActionSchema;
}) {
  const layoutItem = schema.layout[name];
  const { component: compName, attributes } = layoutItem;
  const comp = useComponent(compName);
  return createElement(comp, attributes);
}
