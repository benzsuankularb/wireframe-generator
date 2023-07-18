import Image from "./image.png";

export function LocalizeText_FormField({ label }: { label: string }) {
  return (
    <div className="relative text-black">
      <div className="absolute top-2 left-2">
        {label}
        {" 🌎"}
      </div>
      <img src={Image} className="w-full" />
    </div>
  );
}
