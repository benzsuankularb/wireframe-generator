import { useActionField } from "../../../framework/contexts";
import { LayoutItemRemark } from "../../common/layout-item-remark";
import ImageCheck from "./check.png";
import ImageMultiline from "./image-multiline.png";
import Image from "./image.png";

export function Text_FormField({
  label,
  multiline,
  suffix,
  toggle,
  target,
}: {
  label: string;
  multiline: string;
  suffix?: string;
  toggle?: string;
  target: string;
}) {
  const { fieldSchema } = useActionField(target);
  const dataType = fieldSchema.typeDef.type;

  if (!toggle) {
    return (
      <div className="relative text-black">
        <LayoutItemRemark />
        <div className="absolute top-2 left-2">
          {label}
          {dataType === "localized" ? " 🌎" : ""}
        </div>
        <div className="absolute top-10 left-4 text-black/50">
          {dataType === "number" ? "Enter Number" : "Enter Text"}
        </div>
        {suffix ? (
          <div className="absolute top-10 right-4 text-black/50">{suffix}</div>
        ) : undefined}
        {multiline ? (
          <img src={ImageMultiline} className="w-full" />
        ) : (
          <img src={Image} className="w-full" />
        )}
      </div>
    );
  }

  return (
    <div className="relative text-black">
      <LayoutItemRemark />
      <div className="flex">
        <div className="h-full">
          <img src={ImageCheck} className="w-full" />
        </div>
        <div className="relative w-full">
          <div className="absolute top-2 left-2">
            {label}
            {dataType === "localized" ? " 🌎" : ""}
          </div>
          <div className="absolute top-10 left-4 text-black/50">
            {dataType === "number" ? "Enter Number" : "Enter Text"}
          </div>
          {suffix ? (
            <div className="absolute top-10 right-4 text-black/50">
              {suffix}
            </div>
          ) : undefined}
          {multiline ? (
            <img src={ImageMultiline} className="w-full" />
          ) : (
            <img src={Image} className="w-full" />
          )}
        </div>
      </div>
    </div>
  );
}
