import { ActionSchema } from "../../framework/schemas";

export const contentCategoryAction_editGeneralInfo: ActionSchema = {
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
  },
  layout: {
    name: {
      component: "Text_FormField",
      attributes: {
        label: "Name",
        target: "name",
      },
    },
  },
};
