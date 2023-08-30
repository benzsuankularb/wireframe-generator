import { ActionSchema } from "../../framework/schemas";

export const memberRegcognitionAction_editPrivileges: ActionSchema = {
  type: "action",
  fields: {
    privileges: {
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "entity",
          class: "Privileges",
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
    privileges: {
      component: "EntityTable_FormField",
      attributes: {
        label: "Privileges",
        target: "privileges",
        createAction: "create",
        deleteAction: "delete",
      },
    },
  },
};
