import { SelectorSchema } from "../../framework/schema";

export const eventSelector_edit: SelectorSchema = {
  type: "selector",
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
          name: "Website",
          schema: "eventAction_editWebsite",
        },
        {
          name: "Media",
          schema: "eventAction_editMedia",
        },
        {
          name: "Contents",
          schema: "eventAction_editContents",
        },
      ],
    },
  },
};
