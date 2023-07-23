import { contentComponents } from "./content";
import { sessionComponents } from "./session";

export * from "./content";

export const pageSpecificComponents = {
  ...contentComponents,
  ...sessionComponents,
};
