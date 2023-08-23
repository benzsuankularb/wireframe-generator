import { ActionSchema } from "../../framework/schemas";

export const ticketTypeAction_editBreakdown: ActionSchema = {
  type: "action",
  fields: {},
  layout: {
    breakdown: {
      component: "Selector_FormField",
      attributes: {
        label: "Product & Pricing",
        _wireframe: "Explained in Edit Breakdown",
      },
    },
  },
};
