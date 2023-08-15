import { ActionSchema } from "../../framework/schemas";

export const sessionStatusAction_editGeneralInfo: ActionSchema = {
  type: "action",
  fields: {
    backOfficeColor: {
      typeDef: {
        type: "string",
        format: "color",
      },
    },
  },
  layout: {
    backOfficeColor: {
      component: "ColorPicker_FormField",
      attributes: {
        label: "Back Office Color",
        target: "backOfficeColor",
      },
    },
  },
};
