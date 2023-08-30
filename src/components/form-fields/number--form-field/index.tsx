import { LayoutItemRemark } from "../../common/layout-item-remark";
import Image from "./image.png";

export function Number_FormField({
  label,
  suffix,
}: {
  label: string;
  suffix?: string;
  target: string;
}) {
  return (
    <div className="relative text-black">
      <LayoutItemRemark />
      <div className="absolute top-2 left-2">{label}</div>
      <div className="absolute top-10 left-4 text-black/50">Enter Number</div>
      {suffix ? (
        <div className="absolute top-10 right-4 text-black/50">{suffix}</div>
      ) : undefined}
      <img src={Image} className="w-full" />
    </div>
  );
}
