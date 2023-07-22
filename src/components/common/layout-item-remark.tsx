import { useLayoutItem } from "../../framework/contexts";

export function LayoutItemRemark() {
  const { layoutSchema } = useLayoutItem();

  const remarks = [...(layoutSchema.docs ?? [])];

  if (layoutSchema.samples) {
    const samples = "i.e. " + layoutSchema.samples.join(", ");
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
