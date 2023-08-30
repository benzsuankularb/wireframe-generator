import { SelectorSchema } from "../../framework/schemas";

export const memberTypeSelector_edit: SelectorSchema = {
  type: "selector",
  fields: {},
  actions: {
    memberTypeAction_editGeneralInfo: {},
    memberTypeAction_editPricing: {},
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "General Info",
          schema: "memberTypeAction_editGeneralInfo",
        },
        {
          name: "Pricing",
          schema: "memberTypeAction_editPricing",
        },
      ],
    },
  },
};
