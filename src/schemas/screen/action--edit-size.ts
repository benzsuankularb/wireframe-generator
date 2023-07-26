import { ActionSchema } from "../../framework/schemas";

export const screenAction_editSize: ActionSchema = {
  type: "action",
  fields: {
    row: {
      typeDef: {
        type: "number",
        max: 200,
      },
    },
    column: {
      typeDef: {
        type: "number",
        max: 200,
      },
    },
  },
  layout: {},
};
