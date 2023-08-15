import { ActionSchema } from "../../framework/schemas";

export const priceCardAction_editPricing: ActionSchema = {
  type: "action",
  fields: {
    inheritFrom: {
      typeDef: {
        type: "entity",
        class: "PriceCard",
      },
    },
  },
  layout: {
    price: {
      component: "Selector_FormField",
      attributes: {
        label: "Price Tiers",
        selector: "priceCardItemSelector_manager",
        _wireframe: "Explained in Edit Price Tiers",
      },
    },
  },
};
