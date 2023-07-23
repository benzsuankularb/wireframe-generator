import { SelectorSchema } from "../../framework/schemas";

export const eventSelector_edit: SelectorSchema = {
  type: "selector",
  schemas: {
    editGeneralInfo: {
      schema: "eventAction_editGeneralInfo",
    },
    editPeriod: {
      schema: "eventAction_editPeriod",
    },
    editSaleRestrictions: {
      schema: "eventAction_editSaleRestrictions",
    },
    editWebsite: {
      schema: "eventAction_editWebsite",
    },
    editMedias: {
      schema: "eventAction_editMedias",
    },
    editContents: {
      schema: "eventAction_editContents",
    },
    editFeatured: {
      schema: "eventAction_editFeatured",
    },
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "General Info",
          schemaRef: "editGeneralInfo",
        },
        {
          name: "Period",
          schemaRef: "editPeriod",
        },
        {
          name: "Sale Restrictions",
          schemaRef: "editSaleRestrictions",
        },
        {
          name: "🟥 Website",
          schemaRef: "editWebsite",
        },
        {
          name: "🟥 Medias",
          schemaRef: "editMedias",
        },
        {
          name: "🟥 Featured",
          schemaRef: "editFeatured",
        },
        {
          name: "Contents",
          schemaRef: "editContents",
        },
      ],
    },
  },
};
