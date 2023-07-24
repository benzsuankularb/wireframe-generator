import { useLayoutItemTarget } from "../../../framework/contexts";
import { LayoutItemRemark } from "../../common/layout-item-remark";
import Image from "./image.png";

export function ImageMultiUpload_FormField({
  label,
  resolution,
}: {
  label: string;
  resolution?: { width: number; height: number };
}) {
  const { targetSchema } = useLayoutItemTarget();
  const dataType = targetSchema.typeDef.type;
  return (
    <div className="relative text-black">
      <LayoutItemRemark />
      <div className="absolute top-2 left-2">
        {label}
        {dataType === "localized" ? " 🌎" : undefined}
      </div>
      {resolution ? (
        <div className="absolute bottom-[5px] left-[120px]">{`${resolution.width}x${resolution.height}`}</div>
      ) : null}
      <img src={Image} className="w-full" />
    </div>
  );
}
