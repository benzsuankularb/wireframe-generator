import { ActionSchema } from "../../framework/schemas";

export const sessionAction_editTiming: ActionSchema = {
  type: "action",
  fields: {
    startTime: {
      allowBulk: true,
      typeDef: {
        type: "dateTime",
      },
    },
    duration: {
      allowBulk: true,
      external: true,
      typeDef: {
        type: "number",
      },
    },
  },
  layout: {
    startTime: {
      component: "DatePicker_FormField",
      attributes: {
        label: "Start Time",
      },
    },
    endTime: {
      component: "SessionEndTime_FormField",
      attributes: {
        label: "End Time",
      },
      source: {
        startTime: "startTime",
        duration: "duration",
      },
    },
  },
};
