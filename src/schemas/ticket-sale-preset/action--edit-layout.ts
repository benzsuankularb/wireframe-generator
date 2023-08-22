import { ActionSchema } from "../../framework/schemas";

export const ticketSalePresetAction_editLayout: ActionSchema = {
  type: "action",
  fields: {
    branch: {
      typeDef: {
        type: "entity",
        class: "Branch",
        displayFormat: "%name",
        fields: {
          name: {
            type: "string",
          },
        },
      },
    },
    screen: {
      typeDef: {
        type: "entity",
        class: "Screen",
        displayFormat: "%name",
        fields: {
          name: {
            type: "string",
          },
        },
      },
    },
    layout: {
      typeDef: {
        type: "entity",
        class: "Layout",
        displayFormat: "%name",
        fields: {
          name: {
            type: "string",
          },
        },
      },
    },
    zoneSalePresets: {
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "object",
          fields: {
            zone: {
              type: "entity",
              class: "Zone",
              displayFormat: "%name",
              fields: {
                name: {
                  type: "string",
                },
              },
            },
            salePreset: {
              type: "entity",
              class: "Sale Preset",
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
    branch: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Branch",
        target: "branch",
      },
    },
    screen: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Screen",
        target: "screen",
      },
    },
    layout: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Layout",
        target: "layout",
      },
    },
    zoneSalePresets: {
      component: "TicketSalePresetZones_FormField",
      attributes: {
        label: "Zones",
        target: "zoneSalePresets",
      },
    },
  },
};
