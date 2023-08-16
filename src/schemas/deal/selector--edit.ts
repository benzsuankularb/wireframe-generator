import { SelectorSchema } from "../../framework/schemas";

export const dealSelector_edit: SelectorSchema = {
  type: "selector",
  fields: {},
  actions: {
    dealAction_editActivation: {},
    dealAction_editGeneralInfo: {},
    dealAction_editConfigurations: {},
    dealAction_editUsageMethod: {},
    dealAction_editUsageRestrictions: {},
    dealAction_editRevenueSubsidise: {},
    dealAction_editBenefits: {},
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "Activation",
          schema: "dealAction_editActivation",
        },
        {
          name: "General Info",
          schema: "dealAction_editGeneralInfo",
        },
        {
          name: "Configurations",
          schema: "dealAction_editConfigurations",
        },
        {
          name: "Usage Method",
          schema: "dealAction_editUsageMethod",
        },
        {
          name: "Usage Restrictions",
          schema: "dealAction_editUsageRestrictions",
        },
        {
          name: "Revenue Subsidise",
          schema: "dealAction_editRevenueSubsidise",
        },
        {
          name: "Benefits",
          schema: "dealAction_editBenefits",
        },
      ],
    },
  },
};
