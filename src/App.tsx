import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import { formFieldComponents } from "./components/form-fields";
import { pageSpecificComponents } from "./components/page-specifics";
import { selectorComponents } from "./components/selectors";
import { SchemaLayout } from "./framework/components/schema-layout";
import { WireframeGeneratorConfig } from "./framework/contexts";
import { branchSchemas } from "./schemas/branch";
import { contentSchemas } from "./schemas/content";
import { contentCategorySchemas } from "./schemas/content-category";
import { contentFormatSchemas } from "./schemas/content-format";
import { contentGenreSchemas } from "./schemas/content-genre";
import { contentLanguageSchemas } from "./schemas/content-language";
import { currencySchemas } from "./schemas/currency";
import { dealSchemas } from "./schemas/deal";
import { eventSchemas } from "./schemas/event";
import { memberPackageSchemas } from "./schemas/member-package";
import { memberRegcognitionSchemas } from "./schemas/member-regcognition";
import { memberTypeSchemas } from "./schemas/member-type";
import { pointProviderSchemas } from "./schemas/point-provider";
import { priceCardSchemas } from "./schemas/price-card";
import { priceCardTierSchemas } from "./schemas/price-card-tier";
import { privilegeSchemas } from "./schemas/privilege";
import { screenSchemas } from "./schemas/screen";
import { screenZoneSchemas } from "./schemas/screen-zone";
import { seatCategorySchemas } from "./schemas/seat-category";
import { seatTypeSchemas } from "./schemas/seat-type";
import { sessionSchemas } from "./schemas/session";
import { sessionStatusSchemas } from "./schemas/session-status";
import { ticketPriceTierSchemas } from "./schemas/ticket-price-tier";
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
          ...contentGenreSchemas,
          ...contentFormatSchemas,
          ...contentCategorySchemas,
          ...contentLanguageSchemas,
          ...priceCardSchemas,
          ...priceCardTierSchemas,
          ...sessionStatusSchemas,
          ...seatCategorySchemas,
          ...ticketPriceTierSchemas,
          ...dealSchemas,
          ...privilegeSchemas,
          ...memberTypeSchemas,
          ...memberRegcognitionSchemas,
          ...memberPackageSchemas,
          ...pointProviderSchemas,
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
