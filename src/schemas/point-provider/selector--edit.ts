import { SelectorSchema } from "../../framework/schemas";

export const pointProviderSelector_edit: SelectorSchema = {
  type: "selector",
  fields: {},
  actions: {
    pointProviderAction_editGeneralInfo: {},
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "General Info",
          schema: "pointProviderAction_editGeneralInfo",
        },
      ],
    },
  },
};
