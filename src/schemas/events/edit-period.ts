import { ActionSchema } from "../../framework/schema";

export const event_editPeriod: ActionSchema = {
  type: "action",
  fields: {},
  layout: {
    startDate: {
      component: "Text_FormField",
      attributes: {
        label: "Start Date",
      },
    },
    endDate: {
      component: "Text_FormField",
      attributes: {
        label: "End Date",
      },
    },
  },
};
