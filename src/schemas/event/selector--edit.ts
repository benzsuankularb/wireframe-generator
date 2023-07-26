import { SelectorSchema } from "../../framework/schemas";

export const eventSelector_edit: SelectorSchema = {
  type: "selector",
  schemas: {
    eventAction_editGeneralInfo: {},
    eventAction_editPeriod: {},
    eventAction_editSaleRestrictions: {},
    eventAction_editWebsite: {},
    eventAction_editMedia: {},
    eventAction_editContents: {},
    eventAction_editFeatured: {},
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "General Info",
          schema: "eventAction_editGeneralInfo",
        },
        {
          name: "Period",
          schema: "eventAction_editPeriod",
        },
        {
          name: "Sale Restrictions",
          schema: "eventAction_editSaleRestrictions",
        },
        {
          name: "🟥 Website",
          schema: "eventAction_editWebsite",
        },
        {
          name: "🟥 Media",
          schema: "eventAction_editMedia",
        },
        {
          name: "🟥 Featured",
          schema: "eventAction_editFeatured",
        },
        {
          name: "Contents",
          schema: "eventAction_editContents",
        },
      ],
    },
  },
};
