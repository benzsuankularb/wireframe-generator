import { ActionSchema } from "../../framework/schemas";

export const timingAction_editSessions: ActionSchema = {
  type: "action",
  fields: {
    defaultPreSessionDuration: {
      typeDef: {
        type: "number",
        max: 100,
      },
    },
    defaultCleanupDuration: {
      typeDef: {
        type: "number",
        max: 100,
      },
    },
  },
  layout: {
    defaultPreSessionDuration: {
      component: "Text_FormField",
      attributes: {
        label: "Default Pre-session Duration",
        suffix: "Mins",
        target: "defaultPreSessionDuration",
      },
    },
    defaultCleanupDuration: {
      component: "Text_FormField",
      attributes: {
        label: "Default Cleanup Duration",
        suffix: "Mins",
        target: "defaultCleanupDuration",
      },
    },
  },
};
