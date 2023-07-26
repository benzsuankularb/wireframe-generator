import Image from "./image.png";

export function ScreenManager() {
  return (
    <div className="relative text-black">
      <img src={Image} className="w-full" />
    </div>
  );
}
