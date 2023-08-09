import { SelectorSchema } from "../../framework/schemas";

export const sessionSelector_showtimeEdit: SelectorSchema = {
  type: "selector",
  globalFields: {
    startWindowTime: {
      typeDef: { type: "dateTime" },
    },
    endWindowTime: {
      typeDef: { type: "dateTime" },
    },
  },
  fields: {
    startTime: {
      typeDef: { type: "dateTime" },
    },
    endTime: {
      typeDef: { type: "dateTime" },
    },
    status: {
      typeDef: {
        type: "string",
        enum: [
          "open",
          "plan",
          "inactive",
          "closed", //
        ],
      },
    },
    // etc.
  },
  schemas: {
    sessionAction_editStatus: {},
    sessionAction_editProgram: {},
    sessionAction_editTiming: {},
    sessionAction_editDuration: {},
    sessionAction_editTicket: {},
    sessionAction_editEvent: {},
    sessionAction_editSaleRestrictions: {},
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "Status",
          schema: "sessionAction_editStatus",
        },
        {
          name: "Program",
          schema: "sessionAction_editProgram",
        },
        {
          name: "Timing",
          schema: "sessionAction_editTiming",
        },
        {
          name: "Duration",
          schema: "sessionAction_editDuration",
        },
        {
          name: "Ticket",
          schema: "sessionAction_editTicket",
        },
        {
          name: "Event",
          schema: "sessionAction_editEvent",
        },
        {
          name: "Sale Restrictions",
          schema: "sessionAction_editSaleRestrictions",
        },
      ],
    },
  },
};
