import { SelectorSchema } from "../../framework/schemas";

export const contentCategorySelector_edit: SelectorSchema = {
  type: "selector",
  fields: {},
  schemas: {
    contentCategoryAction_editGeneralInfo: {},
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "General Info",
          schema: "contentCategoryAction_editGeneralInfo",
        },
      ],
    },
  },
};
