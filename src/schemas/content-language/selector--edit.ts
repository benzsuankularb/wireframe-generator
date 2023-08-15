import { SelectorSchema } from "../../framework/schemas";

export const contentLanguageSelector_edit: SelectorSchema = {
  type: "selector",
  fields: {},
  actions: {
    contentLanguageAction_editGeneralInfo: {},
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "General Info",
          schema: "contentLanguageAction_editGeneralInfo",
        },
      ],
    },
  },
};