import { ActionSchema } from "../../framework/schemas";

export const ticketTypeAction_editPricing: ActionSchema = {
  type: "action",
  fields: {
    price: {
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "object",
          fields: {
            currency: {
              type: "entity",
              class: "Currency",
            },
            amount: {
              type: "number",
            },
          },
        },
      },
    },
    lanlordPercentShare: {
      typeDef: {
        type: "number",
        min: 0,
        max: 100,
        step: 0.01,
      },
    },
    distributorPercentShare: {
      typeDef: {
        type: "number",
        min: 0,
        max: 100,
        step: 0.01,
      },
    },
  },
  layout: {
    price: {
      component: "CurrencyAmount_FormField",
      attributes: {
        label: "Price",
        target: "price",
      },
    },
    lanlordPercentShare: {
      component: "Text_FormField",
      attributes: {
        label: "Landlord Share",
        suffix: "%",
        target: "lanlordPercentShare",
      },
    },
    distributorPercentShare: {
      component: "Text_FormField",
      attributes: {
        label: "Distributor Share",
        suffix: "%",
        target: "distributorPercentShare",
      },
    },
  },
};
