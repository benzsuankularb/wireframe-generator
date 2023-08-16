import { branchComponents } from "./branch";
import { contentComponents } from "./content";
import { dealComponents } from "./deal";
import { screenComponents } from "./screen";
import { sessionComponents } from "./session";
import { ticketSalePresetComponents } from "./ticket-sale-preset";
import { ticketTypeComponents } from "./ticket-type";

export * from "./content";

export const pageSpecificComponents = {
  ...ticketTypeComponents,
  ...ticketSalePresetComponents,
  ...contentComponents,
  ...sessionComponents,
  ...screenComponents,
  ...branchComponents,
  ...dealComponents,
};
