import { useLayoutItem } from "../../../framework/contexts";
import { LayoutItemRemark } from "../../common/layout-item-remark";
import Image from "./image.png";

export function ValuePicker_FormField({ label }: { label: string }) {
  const { layoutItemSchema } = useLayoutItem();
  const overrideSamples = layoutItemSchema.attributes?.values
    ? Object.values(
        layoutItemSchema.attributes?.values as {
          [s: string]: string;
        }
      )
    : undefined;
  return (
    <div className="relative text-black">
      <LayoutItemRemark overrideSamples={overrideSamples} />
      <div className="absolute top-2 left-2">{label}</div>
      <div className="absolute top-10 left-4 text-black/50">Select</div>
      <img src={Image} className="w-full" />
    </div>
  );
}
