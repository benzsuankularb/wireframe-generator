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
    editMedia: {
      schema: "eventAction_editMedia",
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
          name: "Website",
          schemaRef: "editWebsite",
        },
        {
          name: "Media",
          schemaRef: "editMedia",
        },
      ],
    },
  },
};
