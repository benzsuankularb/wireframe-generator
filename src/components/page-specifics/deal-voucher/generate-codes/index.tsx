import { LayoutItemRemark } from "../../../common/layout-item-remark";
import Image from "./image.png";

export function DealVoucher_GenerateCodes({ label }: { label: string }) {
  return (
    <div className="relative text-black">
      <LayoutItemRemark />
      <div className="absolute top-2 left-2">{label}</div>
      <img src={Image} className="w-full" />
    </div>
  );
}
