import { LayoutItemRemark } from "../../common/layout-item-remark";
import Image from "./image.png";

export function ColorPicker_FormField({ label }: { label: string }) {
  return (
    <div className="relative text-black">
      <LayoutItemRemark />
      <div className="absolute top-2 left-2">{label}</div>
      <div className="absolute top-10 left-14 text-black/50">Select Color</div>
      <img src={Image} className="w-full" />
    </div>
  );
}
