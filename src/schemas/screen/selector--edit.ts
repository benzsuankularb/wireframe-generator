import { SelectorSchema } from "../../framework/schemas";

export const screenSelector_edit: SelectorSchema = {
  type: "selector",
  fields: {},
  actions: {
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
          schema: "screenAction_editGeneralInfo",
        },
        {
          name: "Sponsor",
          schema: "screenAction_editSponsor",
        },
        {
          name: "Layouts",
          schema: "screenAction_editLayouts",
        },
      ],
    },
  },
};
