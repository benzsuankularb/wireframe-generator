import { SelectorSchema } from "../../framework/schemas";

export const sessionSelector_showtimeEdit: SelectorSchema = {
  type: "selector",
  fields: {
    event: {
      typeDef: {
        type: "entity",
        fields: {},
      },
    },
  },
  schemas: {
    editStatus: {
      schema: "sessionAction_editStatus",
    },
    editProgram: {
      schema: "sessionAction_editProgram",
    },
    editTiming: {
      schema: "sessionAction_editTiming",
    },
    editDuration: {
      schema: "sessionAction_editDuration",
    },
    editEvent: {
      schema: "sessionAction_editEvent",
    },
    editSaleRestrictions: {
      schema: "sessionAction_editSaleRestrictions",
    },
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "Status",
          schemaRef: "editStatus",
        },
        {
          name: "Program",
          schemaRef: "editProgram",
        },
        {
          name: "Timing",
          schemaRef: "editTiming",
        },
        {
          name: "Duration",
          schemaRef: "editDuration",
        },
        {
          name: "Event",
          schemaRef: "editEvent",
        },
        {
          name: "Sale Restrictions",
          schemaRef: "editSaleRestrictions",
        },
      ],
    },
  },
};
