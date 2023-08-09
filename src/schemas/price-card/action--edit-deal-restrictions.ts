import { ActionSchema } from "../../framework/schemas";

export const priceCardAction_editDealRestrictions: ActionSchema = {
  type: "action",
  fields: {
    inclusive: {
      typeDef: {
        type: "boolean",
      },
    },
    deals: {
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "object",
          fields: {
            currency: {
              type: "entity",
              class: "Deal",
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
    inclusive: {
      component: "Toggle_FormField",
      attributes: {
        label: "Inclusive",
        target: "inclusive",
      },
      docs: [
        "Inclusive will force customer the use one of deal in the deals list",
      ],
    },
    deals: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Deals",
        target: "deals",
      },
    },
  },
};
