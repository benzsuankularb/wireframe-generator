import {
  backOfficeSchemas,
  draftBackOfficeSchemas,
} from "@sf-cinema/backoffice-schema";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import { formFieldComponents } from "./components/form-fields";
import { pageSpecificComponents } from "./components/page-specifics";
import { selectorComponents } from "./components/selectors";
import { SchemaLayout } from "./framework/components/schema-layout";
import { WireframeGeneratorConfig } from "./framework/contexts";

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const schema = urlParams.get("schema") ?? "contentSelector_edit";

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <WireframeGeneratorConfig
        components={{
          ...formFieldComponents,
          ...selectorComponents,
          ...pageSpecificComponents,
        }}
        schemas={{
          ...draftBackOfficeSchemas,
          ...backOfficeSchemas,
        }}
      >
        <div className="h-screen">
          <SchemaLayout schema={schema} />
        </div>
      </WireframeGeneratorConfig>
    </ErrorBoundary>
  );
}

export default App;
