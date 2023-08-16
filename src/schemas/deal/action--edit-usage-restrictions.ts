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
