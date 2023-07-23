import { LayoutItemRemark } from "../../common/layout-item-remark";
import Image from "./image.png";

export function EntityOrderer_FormField({ label }: { label: string }) {
  return (
    <div className="relative text-black">
      <LayoutItemRemark />
      <div className="absolute top-2 left-2">{label}</div>
      <div className="absolute top-[50px] left-4 text-black/80">Other #1</div>
      <div className="absolute top-[95px] left-4 text-black/80">Other #2</div>
      <div className="absolute top-[140px] left-12 text-black/80">Current</div>
      <div className="absolute top-[180px] left-4 text-black/80">Other #3</div>
      <div className="absolute top-[225px] left-4 text-black/80">Other #4</div>
      <img src={Image} className="w-full" />
    </div>
  );
}
