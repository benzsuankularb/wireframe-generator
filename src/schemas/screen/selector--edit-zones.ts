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
  schemas: {},
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [],
    },
  },
};
