import { ActionSchema } from "../../framework/schemas";

export const eventAction_editGeneralInfo: ActionSchema = {
  type: "action",
  fields: {
    name: {
      required: true,
      typeDef: {
        type: "localized",
        locales: ["en", "th"],
        itemTypeDef: {
          type: "string",
        },
      },
    },
    shortName: {
      required: true,
      typeDef: {
        type: "string",
      },
    },
    description: {
      required: true,
      typeDef: {
        type: "localized",
        locales: ["en", "th"],
        itemTypeDef: {
          type: "string",
        },
      },
    },
    eventType: {
      required: true,
      samples: ["Music Festival"],
      typeDef: {
        type: "entity",
        class: "EventType",
        displayFormat: "${name}",
        fields: {
          shortName: {
            type: "string",
          },
        },
      },
    },
  },
  layout: {
    name: {
      component: "Text_FormField",
      size: "1/2",
      attributes: {
        label: "Name",
      },
      target: "name",
    },
    shortName: {
      component: "Text_FormField",
      size: "1/2",
      attributes: {
        label: "Short Name",
      },
      target: "shortName",
    },
    eventType: {
      component: "EntityPicker_FormField",
      size: "1/2",
      attributes: {
        label: "Type",
      },
      target: "eventType",
    },
    description: {
      component: "Text_FormField",
      attributes: {
        label: "Description",
        multiline: true,
      },
      target: "description",
    },
  },
};
