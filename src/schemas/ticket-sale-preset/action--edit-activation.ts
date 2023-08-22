import { ActionSchema } from "../../framework/schemas";

export const ticketSalePresetAction_editActivation: ActionSchema = {
  type: "action",
  fields: {
    enable: {
      typeDef: {
        type: "boolean",
      },
    },
    showOnShowtimeManager: {
      typeDef: {
        type: "boolean",
      },
    },
  },
  layout: {
    enable: {
      component: "Toggle_FormField",
      size: "1/2",
      attributes: {
        label: "Enable",
        target: "enable",
      },
    },
    showOnShowtimeManager: {
      component: "Toggle_FormField",
      size: "1/2",
      attributes: {
        label: "Show on Showtime Manager",
        target: "showOnShowtimeManager",
      },
    },
  },
};
