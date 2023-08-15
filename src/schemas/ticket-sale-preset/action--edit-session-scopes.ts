import { ActionSchema } from "../../framework/schemas";

export const ticketSalePresetAction_editSessionScopes: ActionSchema = {
  type: "action",
  fields: {
    fromDate: {
      typeDef: {
        type: "dateTime",
        dateOnly: true,
      },
    },
    toDate: {
      typeDef: {
        type: "dateTime",
        dateOnly: true,
      },
    },
    daysOfWeek: {
      typeDef: {
        type: "string",
        enum: ["mon", "tue", "wed", "thr", "fri", "sat", "sun"],
      },
    },
    branches: {
      typeDef: {
        type: "dateTime",
      },
    },
    contents: {
      //TODO Grouping
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
      //TODO Grouping
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
  },
  layout: {
    fromDate: {
      component: "DatePicker_FormField",
      size: "1/2",
      attributes: {
        label: "From Date",
        target: "fromDate",
      },
    },
    toDate: {
      component: "DatePicker_FormField",
      size: "1/2",
      attributes: {
        label: "To Date",
        target: "toDate",
      },
    },
    daysOfWeek: {
      component: "ValuePicker_FormField",
      attributes: {
        label: "Days of Week",
        target: "daysOfWeek",
      },
    },
    branchs: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Branches",
        target: "branch",
      },
    },
    contents: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Contents",
        target: "content",
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
