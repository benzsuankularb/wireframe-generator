import "./App.css";
import { Text_FormField } from "./components/actions/text--form-field";
import { EntityEdit } from "./components/selectors/entity-edit";
import { SchemaLayout } from "./framework/components/schema-layout";
import { WireframeGeneratorConfig } from "./framework/contexts";
import { editGeneralInfo } from "./schemas/contents/edit-general-info";
import { editPeriod } from "./schemas/contents/edit-period";

import { eventEdit } from "./schemas/contents/event-edit";

function App() {
  return (
    <WireframeGeneratorConfig
      components={{
        EntityEdit,
        Text_FormField,
      }}
      schemas={{
        eventEdit,
        editGeneralInfo,
        editPeriod,
      }}
    >
      <div className="h-screen">
        <SchemaLayout schema={"eventEdit"} />
      </div>
    </WireframeGeneratorConfig>
  );
}

export default App;
