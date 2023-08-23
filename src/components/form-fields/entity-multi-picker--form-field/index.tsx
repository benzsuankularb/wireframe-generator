import { LayoutItemRemark } from "../../common/layout-item-remark";
import ImageCheck from "./check.png";
import Image from "./image.png";

export function EntityMultiPicker_FormField({
  label,
  toggle,
}: {
  label: string;
  toggle?: string;
}) {
  if (!toggle) {
    return (
      <div className="relative text-black">
        <LayoutItemRemark />
        <div className="absolute top-2 left-2">{label}</div>
        <div className="absolute top-10 left-4 text-black/50">
          Select Multiple
        </div>
        <img src={Image} className="w-full" />
      </div>
    );
  }

  return (
    <div className="relative text-black">
      <LayoutItemRemark />
      <div className="absolute top-2 left-2 z-10">{label}</div>
      <div className="flex">
        <div className="h-full">
          <img src={ImageCheck} className="w-full" />
        </div>
        <div className="relative w-full">
          <div className="absolute top-10 left-4 text-black/50">
            Select Multiple
          </div>
          <img src={Image} className="w-full" />
        </div>
      </div>
    </div>
  );
}
