import { SelectorSchema } from "../../framework/schema";

export const content_eventEdit: SelectorSchema = {
  type: "selector",
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "General Info",
          schema: "event_editGeneralInfo",
        },
        {
          name: "Period",
          schema: "event_editPeriod",
        },
        {
          name: "Sale Restrictions",
          schema: "event_editSaleRestrictions",
        },
        {
          name: "Website",
          schema: "event_editWebsite",
        },
        {
          name: "Media",
          schema: "event_editMedia",
        },
        {
          name: "Contents",
          schema: "event_editContents",
        },
      ],
    },
  },
};
