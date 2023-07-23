import { LayoutItemRemark } from "../../common/layout-item-remark";
import Image from "./image.png";

export function EntityPicker_FormField({ label }: { label: string }) {
  return (
    <div className="relative text-black">
      <LayoutItemRemark />
      <div className="absolute top-2 left-2">{label}</div>
      <div className="absolute top-10 left-4 text-black/50">Select</div>
      <img src={Image} className="w-full" />
    </div>
  );
}
