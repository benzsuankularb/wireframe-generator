import { useSchema } from "../contexts/wireframe-generator/hook";
import { ActionLayout } from "./action-layout";
import { SelectorLayout } from "./selector-layout";

export function SchemaLayout({ schema: schemaName }: { schema: string }) {
  const schema = useSchema(schemaName);
  return schema.type === "action" ? (
    <ActionLayout schema={schemaName} />
  ) : (
    <SelectorLayout schema={schemaName} />
  );
}
