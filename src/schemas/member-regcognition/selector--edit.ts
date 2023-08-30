import { SelectorSchema } from "../../framework/schemas";

export const memberRegcognitionSelector_edit: SelectorSchema = {
  type: "selector",
  fields: {},
  actions: {
    memberRegcognitionAction_editGeneralInfo: {},
    memberRegcognitionAction_editPrivileges: {},
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "General Info",
          schema: "memberRegcognitionAction_editGeneralInfo",
        },
        {
          name: "Pricing",
          schema: "memberRegcognitionAction_editPrivileges",
        },
      ],
    },
  },
};
