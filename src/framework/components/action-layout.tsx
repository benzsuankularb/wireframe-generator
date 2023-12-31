/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { ActionSchema } from "@sf-cinema/backoffice-schema";
import { createElement } from "react";
import { ActionLayoutItemContext } from "../contexts";
import { useComponent, useSchema } from "../contexts/wireframe-generator/hook";

export function ActionLayout({ schema: schemaName }: { schema: string }) {
  const schema = useSchema(schemaName);
  if (schema.type !== "action") {
    throw "schema used in ActionLayout must be action schema";
  }

  const layoutNames = Object.keys(schema.layout);
  const layoutItems = layoutNames.map((name) => (
    <ActionLayoutItem itemId={name} schema={schemaName} key={name} />
  ));

  return <div className="w-full">{layoutItems}</div>;
}

function ActionLayoutItem({
  schema: schemaName,
  itemId,
}: {
  itemId: string;
  schema: string;
}) {
  const schema = useSchema(schemaName) as ActionSchema;
  const layoutItem = schema.layout[itemId];
  const { component: compName, attributes } = layoutItem;
  const comp = useComponent(compName);
  return (
    <ActionLayoutItemContext action={schemaName} itemId={itemId}>
      {createElement(comp, { ...attributes })}
    </ActionLayoutItemContext>
  );
}
