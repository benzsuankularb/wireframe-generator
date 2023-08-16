import { ActionSchema } from "../../framework/schemas";

export const dealBenefitAction_editRevenueDistribution: ActionSchema = {
  type: "action",
  fields: {
    landlordSource: {
      typeDef: {
        type: "string",
        enum: ["fixed", "ticketPrice", "dealPrice", "revenue"],
      },
    },
    landlordValue: {
      typeDef: {
        type: "number",
      },
    },
    landlordUsePercentage: {
      typeDef: {
        type: "boolean",
      },
    },
    distributorSource: {
      typeDef: {
        type: "string",
        enum: ["fixed", "ticketPrice", "dealPrice", "revenue", "giftVoucher"],
      },
    },
    distributorValue: {
      typeDef: {
        type: "number",
      },
    },
    distributorUsePercentage: {
      typeDef: {
        type: "boolean",
      },
    },
    partnerSource: {
      typeDef: {
        type: "string",
        enum: ["fixed", "ticketPrice", "dealPrice", "revenue"],
      },
    },
    partnerValue: {
      typeDef: {
        type: "number",
      },
    },
    partnerUsePercentage: {
      typeDef: {
        type: "boolean",
      },
    },
    vatSource: {
      typeDef: {
        type: "string",
        enum: ["fixed", "ticketPrice", "dealPrice", "revenue"],
      },
    },
    vatValue: {
      typeDef: {
        type: "number",
      },
    },
    vatUsePercentage: {
      typeDef: {
        type: "boolean",
      },
    },
  },
  layout: {
    useTicketType: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Same as ticket type",
        target: "useTicketType",
      },
      docs: [
        "Allow empty",
        "Only ticket type which filled all values show up on the list",
        "Select a ticket type will make all fields below readonly with the value from selected ticket type",
      ],
    },
    landlord: {
      component: "DealSourceValue_FormField",
      attributes: {
        label: "Landlord",
        target: {
          source: "landlordSource",
          value: "landlordValue",
          usePercentage: "landlordUsePercentage",
        },
      },
      samples: ["Fixed", "Ticket Price", "Deal Price", "Revenue"],
    },
    distributor: {
      component: "DealSourceValue_FormField",
      attributes: {
        label: "Distributor",
        target: {
          source: "distributorSource",
          value: "distributorValue",
          usePercentage: "distributorUsePercentage",
        },
      },
      samples: ["Fixed", "Ticket Price", "Deal Price", "Revenue", "GV"],
    },
    partner: {
      component: "DealSourceValue_FormField",
      attributes: {
        label: "Partner",
        target: {
          source: "partnerSource",
          value: "partnerValue",
          usePercentage: "partnerUsePercentage",
        },
      },
      docs: ["Disable if partner is empty in the config"],
      samples: ["Fixed", "Ticket Price", "Deal Price", "Revenue"],
    },
    vat: {
      component: "DealSourceValue_FormField",
      attributes: {
        label: "VAT",
        target: {
          source: "vatSource",
          value: "vatValue",
          usePercentage: "vatUsePercentage",
        },
      },
      samples: ["Fixed", "Ticket Price", "Deal Price", "Revenue"],
    },
  },
};
