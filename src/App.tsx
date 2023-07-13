import "./App.css";
import { DatePicker_FormField } from "./components/actions/date-picker--form-field";
import { EntityMultiPicker_FormField } from "./components/actions/entity-multi-picker--form-field";
import { EntityPicker_FormField } from "./components/actions/entity-picker--form-field";
import { ImageMultiUpload_FormField } from "./components/actions/image-multi-upload--form-field";
import { ImageUpload_FormField } from "./components/actions/image-upload--form-field";
import { LocalizeText_FormField } from "./components/actions/localize-text--form-field";
import { Text_FormField } from "./components/actions/text--form-field";
import { Toggle_FormField } from "./components/actions/toggle--form-field";
import { EntityEdit } from "./components/selectors/entity-edit";
import { SchemaLayout } from "./framework/components/schema-layout";
import { WireframeGeneratorConfig } from "./framework/contexts";
import { event_editContents } from "./schemas/events/edit-contents";
import { event_editGeneralInfo } from "./schemas/events/edit-general-info";
import { event_editMedia } from "./schemas/events/edit-media";
import { event_editPeriod } from "./schemas/events/edit-period";
import { event_editSaleRestrictions } from "./schemas/events/edit-sale-restrictions";
import { event_editWebsite } from "./schemas/events/edit-website";

import { content_eventEdit } from "./schemas/events/event-edit";

function App() {
  return (
    <WireframeGeneratorConfig
      components={{
        EntityEdit,
        DatePicker_FormField,
        EntityMultiPicker_FormField,
        EntityPicker_FormField,
        ImageMultiUpload_FormField,
        ImageUpload_FormField,
        LocalizeText_FormField,
        Text_FormField,
        Toggle_FormField,
      }}
      schemas={{
        content_eventEdit,
        event_editGeneralInfo,
        event_editPeriod,
        event_editSaleRestrictions,
        event_editWebsite,
        event_editMedia,
        event_editContents,
      }}
    >
      <div className="h-screen">
        <SchemaLayout schema={"content_eventEdit"} />
      </div>
    </WireframeGeneratorConfig>
  );
}

export default App;
