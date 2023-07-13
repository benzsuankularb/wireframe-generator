import { ActionLayout } from "../../framework/components/action-layout";

export function EntityEdit(props: {
  sections: { name: string; schema: string }[];
}) {
  return (
    <div className="w-[500px] flex flex-col">
      {props.sections.map((section) => [
        <EntityEditSection
          name={section.name}
          schema={section.schema}
          key={section.name}
        />,
      ])}
    </div>
  );
}

function EntityEditSection({ name, schema }: { name: string; schema: string }) {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-800">{name}</div>
      <div className="w-full">
        <ActionLayout schema={schema} />
      </div>
    </div>
  );
}
