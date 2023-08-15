import { ActionSchema } from "../../framework/schemas";

export const priceCardTierAction_editPricing: ActionSchema = {
  type: "action",
  fields: {
    price: {
      typeDef: {
        type: "number",
      },
    },
    excludeChannelFee: {
      typeDef: {
        type: "boolean",
      },
    },
  },
  layout: {
    price: {
      component: "Text_FormField",
      attributes: {
        label: "Total Price",
        target: "price",
      },
      docs: ["Error if sum of all price break down is not equal to the price"],
    },
    excludeChannelFee: {
      component: "Toggle_FormField",
      attributes: {
        label: "Exclude Channel Fee form Revenue",
        target: "excludeChannelFee",
      },
    },
  },
};
