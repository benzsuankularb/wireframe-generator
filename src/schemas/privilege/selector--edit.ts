import { SelectorSchema } from "../../framework/schemas";

export const privilegeSelector_edit: SelectorSchema = {
  type: "selector",
  fields: {},
  actions: {
    privilegeAction_editGeneralInfo: {},
    privilegeAction_editQuota: {},
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "General Info",
          schema: "privilegeAction_editGeneralInfo",
        },
        {
          name: "Quota",
          schema: "privilegeAction_editQuota",
        },
      ],
    },
  },
};
