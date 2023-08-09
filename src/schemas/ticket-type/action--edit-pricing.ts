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
  },
  layout: {
    price: {
      component: "CurrencyAmount_FormField",
      attributes: {
        label: "Price",
        target: "price",
      },
    },
  },
};
