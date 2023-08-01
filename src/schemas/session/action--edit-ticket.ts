import { ActionSchema } from "../../framework/schemas";

export const sessionAction_editTicket: ActionSchema = {
  type: "action",
  fields: {
    layout: {
      allowBulk: true,
      typeDef: {
        type: "entity",
        class: "ScreenLayout",
        displayFormat: "%name",
        fields: {
          name: {
            type: "string",
          },
        },
      },
    },
    priceCard: {
      allowBulk: true,
      typeDef: {
        type: "entity",
        class: "PriceCard",
        displayFormat: "%name",
        fields: {
          name: {
            type: "string",
          },
        },
      },
    },
  },
  layout: {
    layout: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Screen Layout",
      },
      target: "layout",
      docs: [
        "Use the default layout with newly created session", //
      ],
      samples: ["Default", "The Match"],
    },
    priceCard: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Price Card",
      },
      target: "price card",
      docs: [
        "Default is empty", //
        "Unable to open the session if no price card",
      ],
    },
  },
};
