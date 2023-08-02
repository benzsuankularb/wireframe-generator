import { useActionField } from "../../../framework/contexts";
import { LayoutItemRemark } from "../../common/layout-item-remark";
import Image from "./image.png";

export function TextItems_FormField({
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
      <div className="absolute top-[50px] left-11 text-black/70">Item #1</div>
      <div className="absolute top-[95px] left-11 text-black/70">Item #2</div>
      <div className="absolute top-[140px] left-11 text-black/70">Item #3</div>
      <div className="absolute top-[180px] left-11 text-black/70">Item #4</div>
      <div className="absolute top-[225px] left-2 text-black/50">
        Enter New Item
      </div>
      <img src={Image} className="w-full" />
    </div>
  );
}
