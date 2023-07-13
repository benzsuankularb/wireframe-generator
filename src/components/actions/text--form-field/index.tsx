import ImageMultiline from "./image-multiline.png";
import Image from "./image.png";

export function Text_FormField({
  label,
  multiline,
}: {
  label: string;
  multiline: string;
}) {
  return (
    <div className="relative text-black">
      <div className="absolute top-2 left-2">{label}</div>
      {multiline ? <img src={ImageMultiline} /> : <img src={Image} />}
    </div>
  );
}
