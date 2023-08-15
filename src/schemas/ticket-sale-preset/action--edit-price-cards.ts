import { ActionSchema } from "../../framework/schemas";

export const ticketSalePresetAction_editPriceCards: ActionSchema = {
  type: "action",
  fields: {
    default: {
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
    saleChannels: {
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "object",
          fields: {
            channel: {
              type: "entity",
              class: "SaleChannel",
              displayFormat: "%name",
              fields: {
                name: {
                  type: "string",
                },
              },
            },
            priceCard: {
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
      },
    },
  },
  layout: {
    default: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Default Price Card",
      },
    },
    saleChannels: {
      component: "TicketSalePresetSaleChannelPriceCards_FormField",
      attributes: {
        label: "Sale Channels",
      },
      docs: [
        "Default price card will be used if there is no sale channel price card",
      ],
    },
  },
};
