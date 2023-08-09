import { ActionSchema } from "../../framework/schemas";

export const contentLanguageAction_editGeneralInfo: ActionSchema = {
  type: "action",
  fields: {
    name: {
      typeDef: {
        type: "localized",
        locales: ["en", "th"],
        itemTypeDef: {
          type: "string",
        },
      },
    },
    shortName: {
      typeDef: {
        type: "string",
      },
    },
  },
  layout: {
    name: {
      component: "Text_FormField",
      attributes: {
        label: "Name",
        target: "name",
      },
    },
    shortName: {
      component: "Text_FormField",
      attributes: {
        label: "Short Name",
        target: "shortName",
      },
    },
  },
};
