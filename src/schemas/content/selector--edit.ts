import { SelectorSchema } from "../../framework/schemas";

export const contentSelector_edit: SelectorSchema = {
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
    editActivation: {
      schema: "contentAction_editActivation",
    },
    editGeneralInfo: {
      schema: "contentAction_editGeneralInfo",
    },
    editContentInfo: {
      schema: "contentAction_editContentInfo",
    },
    editDuration: {
      schema: "contentAction_editDuration",
    },
    editFormat: {
      schema: "contentAction_editFormat",
    },
    editEvent: {
      schema: "contentAction_editEvent",
      exports: {
        event: "event",
      },
    },
    editMedia: {
      schema: "contentAction_editMedia",
    },
    editCastCrews: {
      schema: "contentAction_editCastCrews",
    },
    editSaleRestrictions: {
      schema: "contentAction_editSaleRestrictions",
      imports: {
        event: "event",
      },
    },
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "Activation",
          schemaRef: "editActivation",
        },
        {
          name: "General Info",
          schemaRef: "editGeneralInfo",
        },
        {
          name: "Content Info",
          schemaRef: "editContentInfo",
        },
        {
          name: "Duration",
          schemaRef: "editDuration",
        },
        {
          name: "Formating",
          schemaRef: "editFormat",
        },
        {
          name: "Event",
          schemaRef: "editEvent",
        },
        {
          name: "Media",
          schemaRef: "editMedia",
        },
        {
          name: "Cast & Crews",
          schemaRef: "editCastCrews",
        },
        {
          name: "Sale Restrictions",
          schemaRef: "editSaleRestrictions",
        },
      ],
    },
  },
};
