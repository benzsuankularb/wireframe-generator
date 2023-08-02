import { ActionSchema } from "../../framework/schemas";

export const sessionAction_editDuration: ActionSchema = {
  type: "action",
  fields: {
    preSessionDuration: {
      typeDef: {
        type: "nullable",
        typeDef: {
          type: "number",
        },
      },
    },
    preBreakContentDuration: {
      readOnly: true,
      typeDef: {
        type: "nullable",
        typeDef: {
          type: "number",
        },
      },
    },
    breakDuration: {
      readOnly: true,
      typeDef: {
        type: "nullable",
        typeDef: {
          type: "number",
        },
      },
    },
    contentDuration: {
      readOnly: true,
      typeDef: {
        type: "nullable",
        typeDef: {
          type: "number",
        },
      },
    },
    cleanupDuration: {
      typeDef: {
        type: "nullable",
        typeDef: {
          type: "number",
        },
      },
    },
  },
  layout: {
    preSessionDuration: {
      component: "Text_FormField",
      attributes: {
        label: "Pre-session Duration",
        suffix: "Mins",
        target: "preSessionDuration",
      },
    },
    cleanupDuration: {
      component: "Text_FormField",
      attributes: {
        label: "Cleanup Duration",
        suffix: "Mins",
        target: "cleanupDuration",
      },
    },
    contentDuration: {
      component: "ReadOnly_FormField",
      attributes: {
        label: "Break Duration",
        suffix: "Mins",
        target: "contentDuration",
      },
      samples: ["95 Mins"],
    },
    preBreakContentDuration: {
      component: "ReadOnly_FormField",
      attributes: {
        label: "Break Duration",
        suffix: "Mins",
        target: "preBreakContentDuration",
      },
      samples: ["60 Mins"],
    },
    breakDuration: {
      component: "ReadOnly_FormField",
      attributes: {
        label: "Break Duration",
        suffix: "Mins",
        target: "breakDuration",
      },
      samples: ["10 Mins"],
    },
    totalDuration: {
      component: "SessionTotalDuration_FormField",
      attributes: {
        label: "Total Duration",
        suffix: "Mins",
      },
      source: {
        presession: "preSessionDuration",
        break: "breakDuration",
        preBreak: "preBreakDuration",
        cleanup: "cleanupDuration",
        content: "contentDuration",
      },
    },
  },
};
