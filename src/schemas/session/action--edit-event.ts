import { ActionSchema } from "../../framework/schemas";

export const sessionAction_editEvent: ActionSchema = {
  type: "action",
  fields: {
    event: {
      typeDef: {
        type: "nullable",
        typeDef: {
          type: "entity",
          class: "Event",
          displayFormat: "%name",
          fields: {
            name: {
              type: "string",
            },
          },
        },
      },
    },
  },
  layout: {
    status: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Event",
      },
      target: "event",
      docs: ["Empty is allowed"],
      samples: ["Music Fest 2023"],
    },
  },
};
