import { ActionSchema } from "../../framework/schemas";

export const dealAction_editBenefits: ActionSchema = {
  type: "action",
  fields: {},
  layout: {
    price: {
      component: "Selector_FormField",
      attributes: {
        label: "Breakdown",
        _wireframe: "Explained in Deal Breakdown",
      },
    },
  },
};
