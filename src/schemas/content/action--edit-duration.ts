import { ActionSchema } from "../../framework/schemas";

export const contentAction_editDuration: ActionSchema = {
  type: "action",
  fields: {
    duration: {
      typeDef: {
        type: "number",
      },
    },
    preBreakContentDuration: {
      typeDef: {
        type: "nullable",
        typeDef: {
          type: "number",
        },
      },
    },
    breakDuration: {
      typeDef: {
        type: "nullable",
        typeDef: {
          type: "number",
        },
      },
    },
  },
  layout: {
    duration: {
      component: "Text_FormField",
      attributes: {
        label: "Duration",
        suffix: "Mins",
      },
      target: "duration",
    },
    preBreakContentDuration: {
      component: "Text_FormField",
      attributes: {
        label: "Pre-break Content Duration",
        suffix: "Mins",
      },
      docs: ["Empty means there is no break for this content"],
      target: "preBreakContentDuration",
    },
    breakDuration: {
      component: "Text_FormField",
      attributes: {
        label: "Break Duration",
        suffix: "Mins",
      },
      docs: ["Allow empty"],
      target: "breakDuration",
    },
  },
};