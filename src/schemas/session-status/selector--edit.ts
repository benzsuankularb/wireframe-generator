import { SelectorSchema } from "../../framework/schemas";

export const sessionStatusSelector_edit: SelectorSchema = {
  type: "selector",
  fields: {},
  actions: {
    sessionStatusAction_editGeneralInfo: {},
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "General Info",
          schema: "sessionStatusAction_editGeneralInfo",
        },
      ],
    },
  },
};
