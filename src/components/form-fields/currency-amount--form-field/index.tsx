import { LayoutItemRemark } from "../../common/layout-item-remark";
import Image from "./image.png";

export function CurrencyAmount_FormField({
  label,
}: {
  label: string;
  target: string;
}) {
  return (
    <div className="relative text-black">
      <LayoutItemRemark />
      <div className="absolute top-2 left-2">{label}</div>
      <img src={Image} className="w-full" />
    </div>
  );
}
