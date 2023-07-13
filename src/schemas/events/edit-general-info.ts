import { ActionSchema } from "../../framework/schema";

export const event_editGeneralInfo: ActionSchema = {
  type: "action",
  fields: {},
  layout: {
    name: {
      component: "Text_FormField",
      attributes: {
        label: "Name",
      },
    },
    shortName: {
      component: "Text_FormField",
      attributes: {
        label: "Short Name",
      },
    },
    description: {
      component: "Text_FormField",
      attributes: {
        label: "Description",
      },
    },
  },
};
