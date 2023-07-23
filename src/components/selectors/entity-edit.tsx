import { ActionLayout } from "../../framework/components/action-layout";
import { useSelectorSchemaRef } from "../../framework/contexts/selector-layout";
import Image from "./image.png";

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
      <div className="w-full relative">
        <div className="absolute bottom-5 left-3 text-black text-2xl">
          {name}
        </div>
        <img src={Image} className="w-full" />
      </div>
      <div className="w-full">
        <ActionLayout schema={schema} />
      </div>
    </div>
  );
}
