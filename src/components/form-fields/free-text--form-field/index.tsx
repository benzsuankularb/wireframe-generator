import { useActionField } from "../../../framework/contexts";
import { LayoutItemRemark } from "../../common/layout-item-remark";
import Image from "./image.png";

export function FreeText_FormField({
  label,
  target,
}: {
  label: string;
  target: string;
}) {
  const { fieldSchema } = useActionField(target);
  const dataType = fieldSchema.typeDef.type;
  return (
    <div className="relative text-black">
      <LayoutItemRemark />
      <div className="absolute top-2 left-2">
        {label}
        {dataType === "localized" ? " 🌎" : ""}
      </div>
      <div className="absolute top-10 left-4 text-black/50">
        {dataType === "number" ? "Enter Number" : "Enter Text"}
      </div>
      <img src={Image} className="w-full" />
    </div>
  );
}
