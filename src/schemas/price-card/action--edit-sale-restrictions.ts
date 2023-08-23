import { ActionSchema } from "../../framework/schemas";

export const priceCardAction_editSaleRestrictions: ActionSchema = {
  type: "action",
  fields: {
    source: {
      allowBulk: true,
      typeDef: {
        type: "string",
        enum: ["none", "event"],
      },
    },
    audience: {
      allowBulk: true,
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
      allowBulk: true,
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
    promotions: {
      typeDef: {
        type: "nullable",
        typeDef: {
          type: "entity",
          class: "Promotion",
          fields: {
            name: {
              type: "string",
            },
          },
        },
      },
    },
    allowComplementary: {
      typeDef: {
        type: "boolean",
      },
    },
    saleChannels: {
      allowBulk: true,
      typeDef: {
        type: "nullable",
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
    },
    startTime: {
      allowBulk: true,
      typeDef: {
        type: "dateTime",
      },
    },
    endTime: {
      allowBulk: true,
      typeDef: {
        type: "dateTime",
      },
    },
  },
  layout: {
    source: {
      component: "ValuePicker_FormField",
      attributes: {
        label: "Restriction Source",
        values: {
          none: "None",
          event: "Event",
          content: "Content",
        },
        target: "source",
      },
      docs: [
        "Select what the source of sale restriction used in this session",
        "All options below will be read-only when source is not none",
        "No event option to select, If session have no event.",
      ],
    },
    audience: {
      component: "ValuePicker_FormField",
      size: "1/2",
      attributes: {
        label: "Audience",
        values: {
          none: "None",
          memberOnly: "Member Only",
          everyone: "Everyone",
        },
        target: "audience",
      },
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
        target: "memberTypes",
      },
      docs: [
        "Only visible when audience is `Member Only`",
        "Empty means all member types are restricted (Same as no one)",
      ],
    },
    saleChannels: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Sale Channels",
        target: "saleChannels",
      },
      docs: ["Empty means no sale channel restricted"],
      samples: ["Disney (Partner)", "Website (Online)", "Kiosk (Front)"],
    },
    paymentChannels: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Payment Channels",
        target: "paymentChannels",
      },
      docs: ["Empty means no payment channel restricted"],
      samples: ["Disney (Partner)", "Website (Online)", "Kiosk (Front)"],
    },
    startTime: {
      component: "DatePicker_FormField",
      attributes: {
        label: "Start Time",
        target: "startTime",
      },
      docs: ["Empty means no starting sale time restricted"],
    },
    endTime: {
      component: "DatePicker_FormField",
      attributes: {
        label: "End Time",
        target: "endTime",
      },
      docs: ["Empty means no ending sale time restricted"],
    },
  },
};
