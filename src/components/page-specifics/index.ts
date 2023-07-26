import { contentComponents } from "./content";
import { screenComponents } from "./screen";
import { sessionComponents } from "./session";

export * from "./content";

export const pageSpecificComponents = {
  ...contentComponents,
  ...sessionComponents,
  ...screenComponents,
};
