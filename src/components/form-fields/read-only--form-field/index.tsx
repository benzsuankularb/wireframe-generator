import { useLayoutItem } from "../../../framework/contexts";
import { LayoutItemRemark } from "../../common/layout-item-remark";
import Image from "./image.png";

export function ReadOnly_FormField({
  label,
}: {
  label: string;
  multiline: string;
  suffix?: string;
}) {
  const { layoutItemSchema } = useLayoutItem();
  const sample = layoutItemSchema?.samples?.[0] ?? "";

  return (
    <div className="relative text-black">
      <LayoutItemRemark />
      <div className="absolute top-2 left-2">{label}</div>
      <div className="absolute top-10 left-3 text-l text-black/60">
        {sample}
      </div>
      <img src={Image} className="w-full" />
    </div>
  );
}
