import { ActionSchema } from "../../framework/schemas";

export const contentAction_editContentInfo: ActionSchema = {
  type: "action",
  fields: {
    synopsis: {
      typeDef: {
        type: "localized",
        locales: ["en", "th"],
        itemTypeDef: {
          type: "string",
          max: 1000,
        },
      },
    },
    description: {
      typeDef: {
        type: "localized",
        locales: ["en", "th"],
        itemTypeDef: {
          type: "string",
          max: 1000,
        },
      },
    },
    ticketMessage: {
      typeDef: {
        type: "localized",
        locales: ["en", "th"],
        itemTypeDef: {
          type: "string",
          max: 1000,
        },
      },
    },
  },
  layout: {
    synopsis: {
      component: "Text_FormField",
      attributes: {
        label: "Synopsis",
        multiline: true,
        target: "synopsis",
      },
    },
    description: {
      component: "Text_FormField",
      attributes: {
        label: "Description",
        multiline: true,
        target: "description",
      },
    },
    ticketMessage: {
      component: "Text_FormField",
      attributes: {
        label: "Ticket Message",
        multiline: true,
        target: "ticketMessage",
      },
    },
  },
};
