import { useLayoutItemTarget } from "../../../framework/contexts";
import { LayoutItemRemark } from "../../common/layout-item-remark";
import Image from "./image.png";

export function ImageMultiUpload_FormField({ label }: { label: string }) {
  const { targetSchema } = useLayoutItemTarget();
  let imageTypeDef = targetSchema.typeDef;
  let hasLocalized = false;
  while (imageTypeDef.type !== "image") {
    if (imageTypeDef.type === "array") {
      imageTypeDef = imageTypeDef.itemTypeDef;
    } else if (imageTypeDef.type === "nullable") {
      imageTypeDef = imageTypeDef.typeDef;
    } else if (imageTypeDef.type === "localized") {
      imageTypeDef = imageTypeDef.itemTypeDef;
      hasLocalized = true;
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
        {hasLocalized ? " 🌎" : undefined}
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
