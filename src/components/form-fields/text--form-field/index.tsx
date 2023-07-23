import { useLayoutItemTarget } from "../../../framework/contexts";
import { LayoutItemRemark } from "../../common/layout-item-remark";
import ImageMultiline from "./image-multiline.png";
import Image from "./image.png";

export function Text_FormField({
  label,
  multiline,
}: {
  label: string;
  multiline: string;
}) {
  const { targetSchema } = useLayoutItemTarget();
  const localized = targetSchema.typeDef.type === "localized";
  return (
    <div className="relative text-black">
      <LayoutItemRemark />
      <div className="absolute top-2 left-2">
        {label}
        {localized ? " 🌎" : ""}
      </div>
      <div className="absolute top-10 left-4 text-black/50">Enter Text</div>
      {multiline ? (
        <img src={ImageMultiline} className="w-full" />
      ) : (
        <img src={Image} className="w-full" />
      )}
    </div>
  );
}
