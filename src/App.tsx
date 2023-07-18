import "./App.css";
import { formFieldComponents } from "./components/form-fields";
import { SchemaLayout } from "./framework/components/schema-layout";
import { WireframeGeneratorConfig } from "./framework/contexts";
import { eventSchemas } from "./schemas/events";

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const schema = urlParams.get("schema") ?? "eventSelector_edit";

  return (
    <WireframeGeneratorConfig
      components={{
        ...formFieldComponents,
      }}
      schemas={{
        ...eventSchemas,
      }}
    >
      <div className="h-screen">
        <SchemaLayout schema={schema} />
      </div>
    </WireframeGeneratorConfig>
  );
}

export default App;
