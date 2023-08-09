import { SelectorSchema } from "../../framework/schemas";

export const sessionSelector_programEdit: SelectorSchema = {
  type: "selector",
  fields: {},
  actions: {
    sessionAction_editStatus: {},
    sessionAction_editProgram: {},
    sessionAction_editTiming: {},
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "Status",
          schema: "sessionAction_editStatus",
        },
        {
          name: "Program",
          schema: "sessionAction_editProgram",
        },
        {
          name: "Timing",
          schema: "sessionAction_editTiming",
        },
      ],
    },
  },
};
