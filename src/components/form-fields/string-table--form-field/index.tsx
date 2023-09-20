import { useActionField } from "../../../framework/contexts";
import { LayoutItemRemark } from "../../common/layout-item-remark";
import ImageOrderable from "./image-orderable.png";
import Image from "./image.png";

export function StringTable_FormField({
  label,
  target,
  sort,
}: {
  label: string;
  target: string;
  sort?: "aces" | "desc";
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
      <img src={sort ? Image : ImageOrderable} className="w-full" />
    </div>
  );
}
