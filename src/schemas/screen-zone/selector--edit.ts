import { SelectorSchema } from "../../framework/schemas";

export const screenZoneSelector_edit: SelectorSchema = {
  type: "selector",
  fields: {},
  actions: {
    screenZoneAction_editGeneralInfo: {},
    screenZoneAction_editSaleRestrictions: {},
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "General Info",
          schema: "screenZoneAction_editGeneralInfo",
        },
        {
          name: "Sale Restrictions",
          schema: "screenZoneAction_editSaleRestrictions",
        },
      ],
    },
  },
};
