import { useLayoutItem } from "../../framework/contexts";

export function LayoutItemRemark({
  overrideSamples,
}: {
  overrideSamples?: string[];
}) {
  const { layoutItemSchema } = useLayoutItem();

  const remarks = [...(layoutItemSchema.docs ?? [])];
  const samples = overrideSamples ?? layoutItemSchema.samples;
  if (samples) {
    const samplesString = "i.e. " + samples.join(", ");
    remarks.push(samplesString);
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
