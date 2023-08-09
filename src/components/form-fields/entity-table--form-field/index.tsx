import { LayoutItemRemark } from "../../common/layout-item-remark";
import ImageAll from "./image-all.png";
import ImageSelf from "./image-self.png";
import Image from "./image.png";

export function EntityTable_FormField({
  label,
  orderable,
  deleteAction,
  createAction,
}: {
  label: string;
  orderable?: "none" | "all" | "self";
  deleteAction?: string;
  createAction?: string;
}) {
  if (orderable === "self") {
    return (
      <div className="relative text-black">
        <LayoutItemRemark />
        <div className="absolute top-2 left-2">{label}</div>
        {createAction ? (
          <div className="absolute text-xl top-2 right-2">+</div>
        ) : undefined}
        <div className="absolute top-[50px] left-4 text-black/80">Other #1</div>
        <div className="absolute top-[95px] left-4 text-black/80">Other #2</div>
        <div className="absolute top-[140px] left-12 text-black/80">
          Current
        </div>
        <div className="absolute top-[180px] left-4 text-black/80">
          Other #3
        </div>
        <div className="absolute top-[225px] left-4 text-black/80">
          Other #4
        </div>
        <img src={ImageSelf} className="w-full" />
      </div>
    );
  }

  if (orderable === "all") {
    return (
      <div className="relative text-black">
        <LayoutItemRemark />
        <div className="absolute top-2 left-2">{label}</div>
        {createAction ? (
          <div className="absolute text-xl top-2 right-2">+</div>
        ) : undefined}
        <div className="absolute top-[50px] left-12 text-black/80">Item #1</div>
        <div className="absolute top-[95px] left-12 text-black/80">Item #2</div>
        <div className="absolute top-[140px] left-12 text-black/80">
          Item #3
        </div>
        <div className="absolute top-[180px] left-12 text-black/80">
          Item #4
        </div>
        <div className="absolute top-[225px] left-12 text-black/80">
          Item #5
        </div>
        <img src={ImageAll} className="w-full" />
      </div>
    );
  }

  return (
    <div className="relative text-black">
      <LayoutItemRemark />
      <div className="absolute top-2 left-2">{label}</div>
      {createAction ? (
        <div className="absolute text-xl top-2 right-2">+</div>
      ) : undefined}
      <div className="absolute top-[50px] left-4 text-black/80">Item #1</div>
      {deleteAction ? (
        <div className="absolute top-[50px] right-5">x</div>
      ) : undefined}
      <div className="absolute top-[95px] left-4 text-black/80">Item #2</div>
      {deleteAction ? (
        <div className="absolute top-[95px] right-5">x</div>
      ) : undefined}
      <div className="absolute top-[140px] left-4 text-black/80">Item #3</div>
      {deleteAction ? (
        <div className="absolute top-[140px] right-5">x</div>
      ) : undefined}
      <div className="absolute top-[180px] left-4 text-black/80">Item #4</div>
      {deleteAction ? (
        <div className="absolute top-[180px] right-5">x</div>
      ) : undefined}
      <div className="absolute top-[225px] left-4 text-black/80">Item #5</div>
      {deleteAction ? (
        <div className="absolute top-[225px] right-5">x</div>
      ) : undefined}
      <img src={Image} className="w-full" />
    </div>
  );
}
