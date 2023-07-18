import { LayoutItemRemark } from "../../common/layout-item-remark";
import Image from "./image.png";

export function ImageUpload_FormField({
  label,
  resolution,
}: {
  label: string;
  resolution?: { width: number; height: number };
}) {
  return (
    <div className="relative text-black">
      <LayoutItemRemark />
      <div className="absolute top-2 left-2">{label}</div>
      {resolution ? (
        <div className="absolute bottom-[5px] left-[120px]">{`${resolution.width}x${resolution.height}`}</div>
      ) : null}
      <img src={Image} className="w-full" />
    </div>
  );
}
