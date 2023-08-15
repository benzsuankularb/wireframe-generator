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
            product: {
              type: "entity",
              class: "ConcessionProduct",
            },
            amount: {
              type: "number",
              min: 1,
            },
          },
        },
      },
    },
  },
  layout: {
    products: {
      component: "TicketTypeConcessions_FormField",
      attributes: {
        label: "Products",
        target: "products",
      },
    },
  },
};
