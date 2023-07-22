import { ActionLayout } from "../../framework/components/action-layout";
import { useSelectorSchemaRef } from "../../framework/contexts/selector-layout";

export function EntityEdit(props: {
  sections: { name: string; schemaRef: string }[];
}) {
  return (
    <div className="w-[500px] flex flex-col">
      {props.sections.map((section) => [
        <EntityEditSection
          name={section.name}
          schemaRef={section.schemaRef}
          key={section.name}
        />,
      ])}
    </div>
  );
}

function EntityEditSection({
  name,
  schemaRef,
}: {
  name: string;
  schemaRef: string;
}) {
  const { schema } = useSelectorSchemaRef(schemaRef);
  return (
    <div className="flex flex-col">
      <div className="bg-gray-800">{name}</div>
      <div className="w-full">
        <ActionLayout schema={schema} />
      </div>
    </div>
  );
}
