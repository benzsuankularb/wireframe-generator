import { ActionSchema } from "../../framework/schema";

export const eventAction_editPeriod: ActionSchema = {
  type: "action",
  fields: {
    startDate: {
      required: true,
      typeDef: {
        type: "dateTime",
        dateOnly: true,
      },
    },
    endDate: {
      required: true,
      typeDef: {
        type: "dateTime",
        dateOnly: true,
      },
    },
  },
  layout: {
    startDate: {
      component: "DatePicker_FormField",
      size: "1/2",
      attributes: {
        label: "Start Date",
        dateOnly: true,
      },
    },
    shortName: {
      component: "DatePicker_FormField",
      size: "1/2",
      attributes: {
        label: "End Date",
        dateOnly: true,
        conditions: [
          {
            gte: "startDate",
          },
        ],
      },
    },
  },
};
