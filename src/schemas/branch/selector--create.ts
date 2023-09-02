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
          layoutItemPrefix: "generalInfo_",
        },
        {
          name: "Location",
          layoutItemPrefix: "location_",
        },
        {
          name: "Contract",
          layoutItemPrefix: "contract_",
        },
        {
          name: "Currency",
          layoutItemPrefix: "currency_",
        },
      ],
    },
  },
};
