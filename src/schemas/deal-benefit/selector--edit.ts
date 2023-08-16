import { SelectorSchema } from "../../framework/schemas";

export const dealBenefitSelector_edit: SelectorSchema = {
  type: "selector",
  fields: {},
  actions: {
    dealBenefitAction_editRevenueDistribution: {},
    dealBenefitAction_editPriceBreakdown: {},
    dealBenefitAction_editBenefit: {},
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "Benefit",
          schema: "dealBenefitAction_editBenefit",
        },
        {
          name: "Price Breakdown",
          schema: "dealBenefitAction_editPriceBreakdown",
        },
        {
          name: "Revenue Distribution",
          schema: "dealBenefitAction_editRevenueDistribution",
        },
      ],
    },
  },
};
