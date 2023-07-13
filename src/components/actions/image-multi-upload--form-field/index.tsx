import Image from "./image.png";

export function ImageMultiUpload_FormField({
  label,
  resolution,
}: {
  label: string;
  resolution?: { width: number; height: number };
}) {
  return (
    <div className="relative text-black">
      <div className="absolute top-2 left-2">{label}</div>
      {resolution ? (
        <div className="absolute bottom-2 left-[300px]">{label}</div>
      ) : null}
      <img src={Image} />
    </div>
  );
}
