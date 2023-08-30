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
    dealAction_editUsageQuota: {},
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
          name: "Usage Method",
          schema: "dealAction_editUsageMethod",
        },
        {
          name: "Restrictions",
          schema: "dealAction_editUsageRestrictions",
        },
        {
          name: "Quota",
          schema: "dealAction_editUsageQuota",
        },
        {
          name: "Breakdown",
          schema: "dealAction_editBenefits",
        },
      ],
    },
  },
};
