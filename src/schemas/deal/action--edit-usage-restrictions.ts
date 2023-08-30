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
    startDayTime: {
      typeDef: {
        type: "number",
      },
    },
    endDayTime: {
      typeDef: {
        type: "number",
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
    priceTiers: {
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "entity",
          class: "PriceTiers",
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
    dateRange: {
      component: "Range_FormField",
      attributes: {
        label: "Effective Date",
        targets: {
          start: "startTime",
          end: "endTime",
        },
      },
    },
    dateOfWeeks: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Date of Weeks",
        target: "dateOfWeeks",
      },
    },
    timeRange: {
      component: "Range_FormField",
      attributes: {
        label: "Time Range",
        targets: {
          start: "startDayTime",
          end: "endDayTime",
        },
        type: "time",
      },
    },
    memberGroups: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Member Groups",
        target: "memberGroups",
      },
    },
    memberTypes: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Member Types",
        target: "memberTypes",
      },
    },
    priceTiers: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Price Tiers",
        target: "priceTiers",
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
