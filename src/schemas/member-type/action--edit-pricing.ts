import { ActionSchema } from "../../framework/schemas";

export const memberTypeAction_editPricing: ActionSchema = {
  type: "action",
  fields: {
    priceTier: {
      typeDef: {
        type: "entity",
        class: "PriceTier",
        displayFormat: "%name",
        fields: {
          name: {
            type: "string",
          },
        },
      },
    },
  },
  layout: {
    priceTier: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Price Tier",
        target: "priceTier",
      },
    },
  },
};
