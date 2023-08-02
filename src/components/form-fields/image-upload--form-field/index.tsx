import { useActionField } from "../../../framework/contexts";
import { LayoutItemRemark } from "../../common/layout-item-remark";
import Image from "./image.png";

export function ImageUpload_FormField({
  label,
  target,
}: {
  label: string;
  target: string;
}) {
  const { fieldSchema } = useActionField(target);
  let imageTypeDef = fieldSchema.typeDef;
  while (imageTypeDef.type !== "image") {
    if (imageTypeDef.type === "nullable") {
      imageTypeDef = imageTypeDef.typeDef;
    } else if (imageTypeDef.type === "localized") {
      imageTypeDef = imageTypeDef.itemTypeDef;
    } else {
      throw "unsuported";
    }
  }
  const resolution = imageTypeDef.resolution;

  return (
    <div className="relative text-black">
      <LayoutItemRemark />
      <div className="absolute top-2 left-2">
        {label}
        {fieldSchema.typeDef.type === "localized" ? " 🌎" : undefined}
      </div>
      {resolution ? (
        <div className="absolute bottom-[5px] left-[120px]">
          {resolution ? `${resolution.width}x${resolution.height}` : undefined}
        </div>
      ) : null}
      <img src={Image} className="w-full" />
    </div>
  );
}
