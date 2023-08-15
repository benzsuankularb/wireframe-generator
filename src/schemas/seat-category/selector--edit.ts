import { SelectorSchema } from "../../framework/schemas";

export const seatCategorySelector_edit: SelectorSchema = {
  type: "selector",
  fields: {},
  actions: {
    seatCategoryAction_editGeneralInfo: {},
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "General Info",
          schema: "seatCategoryAction_editGeneralInfo",
        },
      ],
    },
  },
};
