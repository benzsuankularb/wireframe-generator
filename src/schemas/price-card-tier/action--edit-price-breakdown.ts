import { ActionSchema } from "../../framework/schemas";

export const priceCardTierAction_editPriceBreakdown: ActionSchema = {
  type: "action",
  fields: {
    deductChannelFee: {
      typeDef: {
        type: "boolean",
      },
    },
    ticket: {
      typeDef: {
        type: "entity",
        class: "PriceCard",
      },
    },
    concessions: {
      typeDef: {
        type: "entity",
        class: "PriceCard",
      },
    },
  },
  layout: {
    deductChannelFee: {
      component: "Toggle_FormField",
      attributes: {
        label: "Deduct Channel Fee Before Revenue Share",
        target: "excludeChannelFee",
      },
    },
    ticket: {
      component: "Text_FormField",
      attributes: {
        label: "Ticket",
        target: "ticket",
        suffix: "$",
      },
    },
    concessions: {
      component: "Text_FormField",
      attributes: {
        label: "Concessions",
        target: "concessions",
        suffix: "$",
      },
      docs: ["Disable if the ticket type have no concession"],
    },
  },
};
