import { ActionSchema } from "../../framework/schemas";

export const contentAction_editCastCrews: ActionSchema = {
  type: "action",
  fields: {
    castCrews: {
      typeDef: {
        type: "array",
        max: 20,
        itemTypeDef: {
          type: "object",
          fields: {
            name: {
              type: "string",
            },
            role: {
              type: "string",
              enum: ["actor", "director"],
            },
            picture: {
              type: "image",
              resolution: {
                width: 1024,
                height: 1024,
              },
            },
          },
        },
      },
    },
  },
  layout: {
    castCrews: {
      component: "CastCrewItems_FormField",
      attributes: {
        label: "Cast & Crews",
      },
      docs: ["Orderable"],
      target: "castCrews",
    },
  },
};
