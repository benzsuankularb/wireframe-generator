import { ActionSchema } from "../../framework/schemas";

export const sessionAction_editSaleRestrictions: ActionSchema = {
  type: "action",
  fields: {
    source: {
      allowBulk: true,
      typeDef: {
        type: "string",
        enum: ["none", "event", "content"],
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
    allowSeatSelection: {
      allowBulk: true,
      typeDef: {
        type: "boolean",
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
    promotions: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Promotions",
        searchable: true,
        target: "promotions",
      },
      docs: ["Empty means no promotions restricted"],
    },
    allowComplementary: {
      component: "Toggle_FormField",
      attributes: {
        label: "Allow Complementary Promotions",
        searchable: true,
        target: "allowComplementary",
      },
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
    startTime: {
      component: "DatePicker_FormField",
      attributes: {
        label: "Sale Start",
        target: "startTime",
      },
      docs: ["Empty means no starting sale time restricted"],
    },
    endTime: {
      component: "DatePicker_FormField",
      attributes: {
        label: "Sale End",
        target: "endTime",
      },
      docs: ["Empty means no ending sale time restricted"],
    },
    allowSeatSelection: {
      component: "Toggle_FormField",
      attributes: {
        label: "Allow Seat Selection",
        target: "allowSeatSelection",
      },
      docs: [
        "Default is on",
        "User couldn't select their seat's position this if turned off",
      ],
    },
  },
};
