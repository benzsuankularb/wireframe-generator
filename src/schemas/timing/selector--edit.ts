import { SelectorSchema } from "../../framework/schemas";

export const timingSelector_edit: SelectorSchema = {
  type: "selector",
  actions: {
    timingAction_editSessions: {},
    timingAction_editInitialTime: {},
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "Sessions",
          schema: "timingAction_editSessions",
        },
        {
          name: "Initial Times",
          schema: "timingAction_editInitialTime",
        },
      ],
    },
  },
};
