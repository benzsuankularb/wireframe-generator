import { SelectorSchema } from "../../framework/schemas";

export const priceCardTierSelector_edit: SelectorSchema = {
  type: "selector",
  fields: {},
  actions: {
    priceCardTierAction_editPricing: {},
    priceCardTierAction_editPriceBreakdown: {},
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "Pricing",
          schema: "priceCardTierAction_editPricing",
        },
        {
          name: "Price Breakdown",
          schema: "priceCardTierAction_editPriceBreakdown",
        },
      ],
    },
  },
};
