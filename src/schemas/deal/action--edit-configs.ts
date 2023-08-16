import { ActionSchema } from "../../framework/schemas";

export const dealAction_editConfigurations: ActionSchema = {
  type: "action",
  fields: {
    partner: {
      typeDef: {
        type: "entity",
        class: "Partner",
        displayFormat: "%name",
        fields: {
          name: {
            type: "string",
          },
        },
      },
    },
    ticketTypes: {
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "entity",
          class: "TicketType",
          displayFormat: "%name",
          fields: {
            name: {
              type: "string",
            },
          },
        },
      },
    },
    ticketCount: {
      typeDef: {
        type: "number",
      },
    },
  },
  layout: {
    partner: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Partner",
        target: "partner",
      },
      docs: ["Allow empty"],
    },
    ticketTypes: {
      component: "EntityMultiPicker_FormField",
      size: "1/2",
      attributes: {
        label: "Ticket Types",
        target: "ticketTypes",
      },
    },
    ticketCount: {
      component: "Text_FormField",
      size: "1/2",
      attributes: {
        label: "Tickt Count",
        target: "ticketCount",
      },
    },
  },
};
