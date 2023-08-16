import { ActionSchema } from "../../framework/schemas";

export const dealBenefitAction_editPriceBreakdown: ActionSchema = {
  type: "action",
  fields: {
    useTicketType: {
      typeDef: {
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
    deductChannelFee: {
      typeDef: {
        type: "boolean",
      },
    },
    ticketSource: {
      typeDef: {
        type: "string",
        enum: ["fixed", "ticketPrice"],
      },
    },
    ticketValue: {
      typeDef: {
        type: "number",
      },
    },
    ticketUsePercentage: {
      typeDef: {
        type: "boolean",
      },
    },
    concessionSource: {
      typeDef: {
        type: "string",
        enum: ["fixed", "ticketPrice"],
      },
    },
    concessionValue: {
      typeDef: {
        type: "number",
      },
    },
    concessionUsePercentage: {
      typeDef: {
        type: "boolean",
      },
    },
  },
  layout: {
    useTicketType: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Same as ticket type",
        target: "useTicketType",
      },
      docs: [
        "Allow empty",
        "Only ticket type which filled all values show up on the list",
        "Select a ticket type will make all fields below readonly with the value from selected ticket type",
      ],
    },
    deductChannelFee: {
      component: "Toggle_FormField",
      attributes: {
        label: "Deduct Channel Fee Before Revenue Share",
        target: "deductChannelFee",
      },
    },
    ticket: {
      component: "DealSourceValue_FormField",
      attributes: {
        label: "Ticket",
        target: {
          source: "ticketSource",
          value: "ticketValue",
          usePercentage: "ticketUsePercentage",
        },
      },
      samples: ["Fixed", "Ticket Price"],
    },
    concession: {
      component: "DealSourceValue_FormField",
      attributes: {
        label: "Concession",
        target: {
          source: "concessionSource",
          value: "concessionValue",
          usePercentage: "concessionUsePercentage",
        },
      },
      samples: ["Fixed", "Ticket Price"],
    },
  },
};
