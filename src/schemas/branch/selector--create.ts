import { SelectorSchema } from "../../framework/schemas";

export const branchSelector_create: SelectorSchema = {
  type: "selector",
  fields: {},
  actions: {
    branchAction_create: {},
  },
  layout: {
    component: "EntityCreate",
    attributes: {
      action: "branchAction_create",
      sections: [
        {
          name: "General Info",
          fieldPrefix: "generalInfo_",
        },
        {
          name: "Location",
          fieldPrefix: "location_",
        },
        {
          name: "Contract",
          fieldPrefix: "contract_",
        },
        {
          name: "Currency",
          fieldPrefix: "currency_",
        },
      ],
    },
  },
};
