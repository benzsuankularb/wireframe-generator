import { SelectorSchema } from "../../framework/schemas";

export const timingSelector_edit: SelectorSchema = {
  type: "selector",
  schemas: {
    editSessions: {
      schema: "timingAction_editSessions",
    },
    editInitialTime: {
      schema: "timingAction_editInitialTime",
    },
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "Sessions",
          schemaRef: "editSessions",
        },
        {
          name: "Initial Times",
          schemaRef: "editInitialTime",
        },
      ],
    },
  },
};
