import { SelectorSchema } from "../../framework/schemas";

export const contentFormatSelector_edit: SelectorSchema = {
  type: "selector",
  fields: {},
  schemas: {
    contentFormatAction_editGeneralInfo: {},
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "General Info",
          schema: "contentFormatAction_editGeneralInfo",
        },
      ],
    },
  },
};
