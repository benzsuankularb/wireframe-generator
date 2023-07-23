import { ActionSchema } from "../../framework/schemas";

export const sessionAction_editDuration: ActionSchema = {
  type: "action",
  fields: {
    contentDuration: {
      external: true,
      typeDef: {
        type: "number",
      },
    },
    preSessionDuration: {
      typeDef: {
        type: "nullable",
        typeDef: {
          type: "number",
        },
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
      },
      target: "preSessionDuration",
    },
    preBreakContentDuration: {
      component: "Text_FormField",
      attributes: {
        label: "Pre-break Content Duration",
        suffix: "Mins",
      },
      target: "preBreakContentDuration",
    },
    breakDuration: {
      component: "Text_FormField",
      attributes: {
        label: "Break Duration",
        suffix: "Mins",
      },
      target: "breakDuration",
    },
    cleanupDuration: {
      component: "Text_FormField",
      attributes: {
        label: "Cleanup Duration",
        suffix: "Mins",
      },
      target: "cleanupDuration",
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
