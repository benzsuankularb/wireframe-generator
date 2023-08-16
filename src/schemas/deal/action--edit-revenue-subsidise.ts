import { ActionSchema } from "../../framework/schemas";

export const dealAction_editRevenueSubsidise: ActionSchema = {
  type: "action",
  fields: {
    cinema: {
      typeDef: {
        type: "number",
      },
    },
    landlord: {
      typeDef: {
        type: "number",
      },
    },
    distributor: {
      typeDef: {
        type: "number",
      },
    },
    partner: {
      typeDef: {
        type: "number",
      },
    },
  },
  layout: {
    cinema: {
      component: "Text_FormField",
      attributes: {
        label: "Cinema",
        target: "cinema",
        suffix: "$",
      },
    },
    landlord: {
      component: "Text_FormField",
      attributes: {
        label: "Landlord",
        target: "landlord",
        suffix: "$",
      },
    },
    distributor: {
      component: "Text_FormField",
      attributes: {
        label: "Distributor",
        target: "distributor",
        suffix: "$",
      },
    },
    partner: {
      component: "Text_FormField",
      attributes: {
        label: "Partner",
        target: "partner",
        suffix: "$",
      },
      docs: ["Disable if partner in configurations is empty"],
    },
  },
};
