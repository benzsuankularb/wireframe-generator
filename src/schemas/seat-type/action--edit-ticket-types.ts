import { ActionSchema } from "../../framework/schemas";

export const seatTypeAction_editTicketTypes: ActionSchema = {
  type: "action",
  fields: {
    ticketTypes: {
      typeDef: {
        type: "nullable",
        typeDef: {
          type: "entity",
          class: "SeatType",
        },
      },
    },
  },
  layout: {
    ticketTypes: {
      component: "EntityTable_FormField",
      size: "1/2",
      attributes: {
        label: "Ticket Types",
        target: "ticketTypes",
        createAction: "ticketTypeAction_create",
        deleteAction: "ticketTypeAction_delete",
      },
      docs: [
        "Always have a default ticket type on the top",
        "The default ticket type could not be delete",
        "Click the item to edit the ticket type",
      ],
    },
  },
};
