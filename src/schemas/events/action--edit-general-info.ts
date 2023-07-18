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
      type: "string",
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
      component: "LocalizeText_FormField",
      size: "1/2",
      attributes: {
        label: "Name",
        locales: ["en", "th"],
      },
    },
    shortName: {
      component: "Text_FormField",
      size: "1/2",
      attributes: {
        label: "Short Name",
      },
    },
    eventType: {
      component: "EntityPicker_FormField",
      size: "1/2",
      attributes: {
        label: "Type",
      },
    },
    description: {
      component: "Text_FormField",
      attributes: {
        label: "Description",
        multiline: true,
      },
    },
  },
};
