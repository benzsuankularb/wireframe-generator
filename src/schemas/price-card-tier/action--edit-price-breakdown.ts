import { ActionSchema } from "../../framework/schemas";

export const priceCardTierAction_editPriceBreakdown: ActionSchema = {
  type: "action",
  fields: {
    ticket: {
      typeDef: {
        type: "entity",
        class: "PriceCard",
      },
    },
    services: {
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
    ticket: {
      component: "Text_FormField",
      attributes: {
        label: "Ticket",
        target: "ticket",
      },
    },
    services: {
      component: "Text_FormField",
      attributes: {
        label: "Services",
        target: "services",
      },
      docs: ["Disable if the ticket types have no service"],
    },
    concessions: {
      component: "Text_FormField",
      attributes: {
        label: "Concessions",
        target: "concessions",
      },
      docs: ["Disable if the ticket type have no concession"],
    },
  },
};
