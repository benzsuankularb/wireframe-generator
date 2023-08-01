import { ActionSchema } from "../../framework/schemas";

export const eventAction_editFeatured: ActionSchema = {
  type: "action",
  fields: {
    showOnFeatured: {
      typeDef: {
        type: "boolean",
      },
    },
    ordering: {
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "entity",
          displayFormat: "%name",
          fields: {
            name: {
              type: "string",
            },
          },
        },
      },
    },
  },
  layout: {
    showOnFeatured: {
      component: "Toggle_FormField",
      attributes: {
        label: "Show on Featured",
      },
      target: "showOnFeatured",
    },
    ordering: {
      component: "EntityTable_FormField",
      attributes: {
        label: "Ordering",
        orderable: "self",
      },
      target: "ordering",
      docs: ["Only visible when `Show on Feature` is on."],
    },
  },
};
