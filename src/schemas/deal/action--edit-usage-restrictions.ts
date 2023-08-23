import { ActionSchema } from "../../framework/schemas";

export const dealAction_editUsageRestrictions: ActionSchema = {
  type: "action",
  fields: {
    startTime: {
      typeDef: {
        type: "dateTime",
      },
    },
    endTime: {
      typeDef: {
        type: "dateTime",
      },
    },
    dateOfWeeks: {
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "string",
          enum: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
        },
      },
    },
    timeOfDates: {
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "number", // interval
        },
      },
    },
    usagePerMonth: {
      typeDef: {
        type: "number",
      },
    },
    usagePerContent: {
      typeDef: {
        type: "number",
      },
    },
    creditCardVendors: {
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "entity",
          class: "CreditCardVender",
          displayFormat: "%name",
          fields: {
            name: {
              type: "string",
            },
          },
        },
      },
    },
    memberGroups: {
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "entity",
          class: "MemberGroup",
          displayFormat: "%name",
          fields: {
            name: {
              type: "string",
            },
          },
        },
      },
    },
    memberTypes: {
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "entity",
          class: "MemberType",
          displayFormat: "%name",
          fields: {
            name: {
              type: "string",
            },
          },
        },
      },
    },
    saleChannels: {
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "entity",
          class: "SaleChannel",
          displayFormat: "%name",
          fields: {
            name: {
              type: "string",
            },
          },
        },
      },
    },
    paymentChannels: {
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "entity",
          class: "PaymentChannel",
          displayFormat: "%name",
          fields: {
            name: {
              type: "string",
            },
          },
        },
      },
    },
    contents: {
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "entity",
          class: "Content",
          displayFormat: "%name",
          fields: {
            name: {
              type: "string",
            },
          },
        },
      },
    },
    events: {
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "entity",
          class: "Event",
          displayFormat: "%name",
          fields: {
            name: {
              type: "string",
            },
          },
        },
      },
    },
  },
  layout: {
    startTime: {
      component: "DatePicker_FormField",
      attributes: {
        label: "Start Time",
        target: "startTime",
      },
    },
    endTime: {
      component: "DatePicker_FormField",
      attributes: {
        label: "End Time",
        target: "endTime",
      },
    },
    memberTypes: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Member Types",
        target: "memberTypes",
      },
    },
    saleChannels: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Sale Channels",
        target: "saleChannels",
      },
    },
    paymentChannels: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Payment Channels",
        target: "paymentChannels",
      },
    },
    contents: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Contents",
        target: "contents",
      },
    },
    events: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Events",
        target: "events",
      },
    },
  },
};
