import { ActionSchema } from "../../framework/schemas";

export const eventAction_editSaleRestrictions: ActionSchema = {
  type: "action",
  fields: {
    audience: {
      required: true,
      typeDef: {
        type: "entity",
        displayFormat: "%name",
        fields: {
          name: {
            type: "string",
          },
        },
      },
    },
    memberTypes: {
      required: true,
      typeDef: {
        type: "nullable",
        typeDef: {
          type: "array",
          itemTypeDef: {
            type: "entity",
            class: "MemberType",
            fields: {
              name: {
                type: "string",
              },
            },
          },
        },
      },
    },
    promocodes: {
      required: true,
      typeDef: {
        type: "nullable",
        typeDef: {
          type: "entity",
          class: "Promocode",
          fields: {
            name: {
              type: "string",
            },
          },
        },
      },
    },
    paymentChannels: {
      required: true,
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "nullable",
          typeDef: {
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
    },
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
    allowSeatSelection: {
      typeDef: {
        type: "boolean",
      },
    },
  },
  layout: {
    audience: {
      component: "EntityPicker_FormField",
      size: "1/2",
      attributes: {
        label: "Audience",
      },
      target: "audience",
      samples: ["No One", "Member Only", "Everyone"],
    },
    memberTypes: {
      component: "EntityMultiPicker_FormField",
      size: "1/2",
      attributes: {
        label: "Member Types",
        useNullAsAll: true,
        hideWhen: [
          {
            field: "member",
            is: false,
          },
        ],
      },
      target: "memberTypes",
      docs: [
        "Only visible when audience is `Member Only`",
        "Empty means all member types are restricted (Same as no one)",
      ],
    },
    promocodes: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Promo Code",
        searchable: true,
      },
      docs: ["Empty means no promocode restricted"],
      target: "promocodes",
    },
    paymentChannels: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Payment Channels",
      },
      target: "paymentChannels",
      docs: ["Empty means no payment channel restricted"],
      samples: ["Disney (Partner)", "LinePay (Online)", "Kiosk (Front)"],
    },
    startTime: {
      component: "DatePicker_FormField",
      attributes: {
        label: "Sale Start",
      },
      target: "startTime",
      docs: ["Empty means no starting sale time restricted"],
    },
    endTime: {
      component: "DatePicker_FormField",
      attributes: {
        label: "Sale End",
      },
      target: "endTime",
      docs: ["Empty means no ending sale time restricted"],
    },
    allowSeatSelection: {
      component: "Toggle_FormField",
      attributes: {
        label: "Allow Seat Selection",
      },
      target: "allowSeatSelection",
      docs: [
        "Default is on",
        "User couldn't select their seat's position this if turned off",
      ],
    },
  },
};
