import { ActionSchema } from "../../framework/schemas";

export const ticketTypeAction_editServices: ActionSchema = {
  type: "action",
  fields: {
    services: {
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "object",
          fields: {
            name: {
              type: "localized",
              locales: ["en", "th"],
              itemTypeDef: {
                type: "string",
              },
            },
            description: {
              type: "localized",
              locales: ["en", "th"],
              itemTypeDef: {
                type: "string",
              },
            },
          },
        },
      },
    },
  },
  layout: {
    services: {
      component: "TicketTypeServices_FormField",
      attributes: {
        label: "Services",
        target: "services",
      },
    },
  },
};
