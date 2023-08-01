import { ActionSchema } from "../../framework/schemas";

export const screenZoneAction_editGeneralInfo: ActionSchema = {
  type: "action",
  fields: {
    name: {
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
      },
      target: "name",
    },
    color: {
      component: "ColorPicker_FormField",
      attributes: {
        label: "Color",
      },
      target: "color",
    },
  },
};
