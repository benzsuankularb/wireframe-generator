import { SelectorSchema } from "../../framework/schemas";

export const seatTypeSelector_edit: SelectorSchema = {
  type: "selector",
  fields: {},
  actions: {
    seatTypeAction_editGeneralInfo: {},
    seatTypeAction_editSeat: {},
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "General Info",
          schema: "seatTypeAction_editGeneralInfo",
        },
        {
          name: "Seat",
          schema: "seatTypeAction_editSeat",
        },
        {
          name: "Ticket Types",
          schema: "seatTypeAction_editTicketTypes",
        },
      ],
    },
  },
};
