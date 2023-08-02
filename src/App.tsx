import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import { formFieldComponents } from "./components/form-fields";
import { pageSpecificComponents } from "./components/page-specifics";
import { selectorComponents } from "./components/selectors";
import { SchemaLayout } from "./framework/components/schema-layout";
import { WireframeGeneratorConfig } from "./framework/contexts";
import { branchSchemas } from "./schemas/branch";
import { contentSchemas } from "./schemas/content";
import { currencySchemas } from "./schemas/currency";
import { eventSchemas } from "./schemas/event";
import { screenSchemas } from "./schemas/screen";
import { screenZoneSchemas } from "./schemas/screen-zone";
import { seatTypeSchemas } from "./schemas/seat-type";
import { sessionSchemas } from "./schemas/session";
import { ticketTypeSchemas } from "./schemas/ticket-type";
import { timingSchemas } from "./schemas/timing";

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const schema = urlParams.get("schema") ?? "eventSelector_edit";

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <WireframeGeneratorConfig
        components={{
          ...formFieldComponents,
          ...selectorComponents,
          ...pageSpecificComponents,
        }}
        schemas={{
          ...branchSchemas,
          ...screenSchemas,
          ...eventSchemas,
          ...contentSchemas,
          ...timingSchemas,
          ...sessionSchemas,
          ...screenZoneSchemas,
          ...currencySchemas,
          ...seatTypeSchemas,
          ...ticketTypeSchemas,
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
