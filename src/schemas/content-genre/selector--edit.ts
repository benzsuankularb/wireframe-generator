import { SelectorSchema } from "../../framework/schemas";

export const contentGenreSelector_edit: SelectorSchema = {
  type: "selector",
  fields: {},
  schemas: {
    contentGenreAction_editGeneralInfo: {},
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "General Info",
          schema: "contentGenreAction_editGeneralInfo",
        },
      ],
    },
  },
};
