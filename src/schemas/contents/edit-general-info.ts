import { ActionSchema } from "../../framework/schema";

export const editGeneralInfo: ActionSchema = {
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
