import { useLayoutItem } from "../../framework/contexts";

export function LayoutItemRemark() {
  const { layoutItemSchema } = useLayoutItem();

  const remarks = [...(layoutItemSchema.docs ?? [])];

  if (layoutItemSchema.samples) {
    const samples = "i.e. " + layoutItemSchema.samples.join(", ");
    remarks.push(samples);
  }

  return (
    <div className="absolute -right-2 top-4 translate-x-full font-sans text-red-800 text-xs text-left">
      <ul>
        {remarks.map((remark, i) => (
          <li key={i}>• {remark}</li>
        ))}
      </ul>
    </div>
  );
}
