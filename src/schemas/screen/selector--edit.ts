import { SelectorSchema } from "../../framework/schemas";

export const screenSelector_edit: SelectorSchema = {
  type: "selector",
  fields: {
    event: {
      typeDef: {
        type: "entity",
        fields: {},
      },
    },
  },
  schemas: {
    screenAction_editGeneralInfo: {},
    screenAction_editSponsor: {},
    screenSelector_manage: {},
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
          name: "Layouts & Zones",
          schema: "screenSelector_manage",
        },
      ],
    },
  },
};
