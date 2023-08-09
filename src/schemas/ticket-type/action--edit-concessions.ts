import { ActionSchema } from "../../framework/schemas";

export const ticketTypeAction_editConcessions: ActionSchema = {
  type: "action",
  fields: {
    products: {
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "object",
          fields: {
            currency: {
              type: "entity",
              class: "ConcessionProduct",
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
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Products",
        target: "products",
      },
    },
  },
};
