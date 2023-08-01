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
    contentAction_create: {}, //global

    contentAction_copy: {},
    contentAction_delete: {},
    contentAction_editActivation: {},
    contentAction_editGeneralInfo: {},
    contentAction_editContentInfo: {},
    contentAction_editDuration: {},
    contentAction_editFormat: {},
    contentAction_editEvent: {
      exports: {
        event: "event",
      },
    },
    contentAction_editMedia: {},
    contentAction_editCastCrews: {},
    contentAction_editSaleRestrictions: {
      imports: {
        event: "event",
      },
    },
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      actionButtons: [
        {
          name: "Delete",
          schema: "delete",
          mode: "danger",
        },
        {
          name: "Copy",
          schema: "delete",
          mode: "danger",
        },
      ],
      sections: [
        {
          name: "Activation",
          schema: "contentAction_editActivation",
        },
        {
          name: "General Info",
          schema: "contentAction_editGeneralInfo",
        },
        {
          name: "Content Info",
          schema: "contentAction_editContentInfo",
        },
        {
          name: "Duration",
          schema: "contentAction_editDuration",
        },
        {
          name: "Formating",
          schema: "contentAction_editFormat",
        },
        {
          name: "Event",
          schema: "contentAction_editEvent",
        },
        {
          name: "Media",
          schema: "contentAction_editMedia",
        },
        {
          name: "Cast & Crews",
          schema: "contentAction_editCastCrews",
        },
        {
          name: "Sale Restrictions",
          schema: "contentAction_editSaleRestrictions",
        },
      ],
    },
  },
};
