import { SelectorSchema } from "../../framework/schemas";

export const currencySelector_edit: SelectorSchema = {
  type: "selector",
  fields: {},
  schemas: {
    screenAction_editGeneralInfo: {},
    screenAction_editSponsor: {},
    screenAction_editLayouts: {},
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "General Info",
          schema: "currencyAction_editGeneralInfo",
        },
      ],
    },
  },
};
