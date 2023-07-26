import { SelectorSchema } from "../../framework/schemas";

export const screenSelector_manage: SelectorSchema = {
  type: "selector",
  globalFields: {
    screen: {
      typeDef: {
        type: "entity",
      },
    },
  },
  schemas: {
    screenAction_size: {},
    screenLayoutSelector_manage: {},
    screenZoneSelector_manage: {},
  },
  layout: {
    component: "ScreenManager",
    attributes: {
      editSize: "screenAction_size",
      manageLayouts: "screenLayoutSelector_manage",
      manageZones: "screenZoneSelector_manage",
    },
  },
};
