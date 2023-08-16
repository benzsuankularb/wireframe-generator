import { ActionSchema } from "../../framework/schemas";

export const sessionAction_editSale: ActionSchema = {
  type: "action",
  fields: {
    preset: {
      allowBulk: true,
      typeDef: {
        type: "entity",
        class: "TicketSalePreset",
        displayFormat: "%name",
        fields: {
          name: {
            type: "string",
          },
        },
      },
    },
    channels: {
      allowBulk: true,
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
  layout: {
    preset: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Preset",
        target: "preset",
      },
    },
    channels: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Channels",
        target: "channels",
      },
      docs: [
        "Only channels which is in the sale preset will listed here",
        "Default is all",
      ],
    },
  },
};
