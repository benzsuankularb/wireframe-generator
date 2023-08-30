import { useActionField } from "../../../framework/contexts";
import { LayoutItemRemark } from "../../common/layout-item-remark";
import DateImage from "./date-image.png";
import NumberImage from "./number-image.png";
import TimeImage from "./time-image.png";

export function Range_FormField({
  label,
  targets,
  type,
}: {
  label: string;
  targets: {
    start: string;
    end: string;
  };
  type?: "time" | "default";
}) {
  console.log(targets.start);
  const { fieldSchema } = useActionField(targets.start);
  const dataType = fieldSchema.typeDef.type;
  console.log(">>>>>>>>>>>>>>>>>>>..");

  let image = "";
  if (type === "time") {
    image = TimeImage;
  } else if (dataType === "number") {
    image = NumberImage;
  } else if (dataType === "dateTime") {
    image = DateImage;
  } else {
    throw "unsupported type";
  }

  return (
    <div className="relative text-black">
      <LayoutItemRemark />
      <div className="absolute top-2 left-2">{label}</div>
      <img src={image} className="w-full" />
    </div>
  );
}
