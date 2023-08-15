import { ActionSchema } from "../../framework/schemas";

export const ticketTypeAction_editGeneralInfo: ActionSchema = {
  type: "action",
  fields: {
    name: {
      typeDef: {
        type: "string",
      },
    },
    shortName: {
      typeDef: {
        type: "string",
      },
    },
    seatType: {
      typeDef: {
        type: "entity",
        class: "SeatType",
        displayFormat: "%name",
      },
    },
  },
  layout: {
    name: {
      component: "Text_FormField",
      size: "1/2",
      attributes: {
        label: "Name",
        target: "name",
      },
    },
    shortName: {
      component: "Text_FormField",
      size: "1/2",
      attributes: {
        label: "Short Name",
        target: "shortName",
      },
    },
    seatType: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Seat Type",
        target: "seatType",
      },
    },
  },
};