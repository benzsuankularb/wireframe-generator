import { ActionSchema } from "../../framework/schemas";

export const contentFormatAction_editGeneralInfo: ActionSchema = {
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
    color: {
      typeDef: {
        type: "string",
        format: "color",
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
    backOfficeColor: {
      component: "ColorPicker_FormField",
      attributes: {
        label: "Back Office Color",
        target: "backOfficeColor",
      },
    },
  },
};
