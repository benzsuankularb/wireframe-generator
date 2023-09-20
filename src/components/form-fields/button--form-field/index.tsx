import { LayoutItemRemark } from "../../common/layout-item-remark";
import Image from "./image.png";

export function Button_FormField({ label }: { label: string }) {
  return (
    <div className="relative text-black">
      <LayoutItemRemark />
      <div className="absolute top-3 left-7">{label}</div>
      <img src={Image} className="w-full" />
    </div>
  );
}
