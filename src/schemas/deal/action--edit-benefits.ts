import { ActionSchema } from "../../framework/schemas";

export const dealAction_editBenefits: ActionSchema = {
  type: "action",
  fields: {},
  layout: {
    price: {
      component: "Selector_FormField",
      attributes: {
        label: "Benefits",
        selector: "dealBenefitSelector_Manager",
        _wireframe: "Explained in Edit Deal Benefits",
      },
    },
  },
};
