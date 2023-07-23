import { ActionSchema } from "../../framework/schemas";

export const timingAction_editInitialTime: ActionSchema = {
  type: "action",
  global: true,
  fields: {
    initialDayOfWeek: {
      typeDef: {
        type: "number",
        max: 6,
      },
    },
    initialHourOfDay: {
      typeDef: {
        type: "number",
        max: 23,
      },
    },
  },
  layout: {
    initialDayOfWeek: {
      component: "ValuePicker_FormField",
      attributes: {
        label: "Initial Day of the Week",
        options: {
          0: "Mon",
          1: "Tue",
          2: "Wed",
          3: "Thu",
          4: "Fri",
          5: "Sat",
          6: "Sun",
        },
      },
      samples: ["Mon", "Fri", "Sat"],
      target: "initialDayOfWeek",
    },
    initialHourOfDay: {
      component: "Text_FormField",
      attributes: {
        label: "Initial Hour of the Day",
        suffix: "O'Clock",
      },
      target: "initialHourOfDay",
    },
  },
};
