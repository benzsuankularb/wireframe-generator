import Image from "./image.png";

export function ImageMultiUpload_FormField({
  label,
  resolution,
}: {
  label: string;
  resolution?: { width: number; height: number };
}) {
  console.log(resolution);
  return (
    <div className="relative text-black">
      <div className="absolute top-2 left-2">{label}</div>
      {resolution ? (
        <div className="absolute bottom-[5px] left-[120px]">{`${resolution.width}x${resolution.height}`}</div>
      ) : null}
      <img src={Image} className="w-full" />
    </div>
  );
}
