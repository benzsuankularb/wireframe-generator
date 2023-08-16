import { ActionSchema } from "../../framework/schemas";

export const sessionAction_editConfig: ActionSchema = {
  type: "action",
  fields: {
    layout: {
      allowBulk: true,
      typeDef: {
        type: "entity",
        class: "ScreenLayout",
        displayFormat: "%name",
        fields: {
          name: {
            type: "string",
          },
        },
      },
    },
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
    layout: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Layout",
        target: "layout",
      },
      docs: [
        "Use the default layout with newly created session", //
      ],
      samples: ["Default", "The Match"],
    },
    event: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Event",
        target: "event",
      },
      docs: [
        "Empty is allowed",
        "Content's event will be used as the default value when session created",
      ],
      samples: ["Music Fest 2023"],
    },
  },
};
