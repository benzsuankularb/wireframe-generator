import { LayoutItemRemark } from "../../common/layout-item-remark";
import Image from "./image.png";

export function Selector_FormField({
  label,
  _wireframe,
}: {
  label: string;
  _wireframe: string;
}) {
  return (
    <div className="relative text-black">
      <LayoutItemRemark />
      <div className="absolute top-2 left-2">{label}</div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {_wireframe}
      </div>
      <img src={Image} className="w-full" />
    </div>
  );
}
