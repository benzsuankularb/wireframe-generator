import { SelectorSchema } from "../../framework/schemas";

export const branchSelector_edit: SelectorSchema = {
  type: "selector",
  fields: {
    event: {
      typeDef: {
        type: "entity",
        fields: {},
      },
    },
  },
  schemas: {
    branchAction_editGeneralInfo: {},
    branchAction_editLocation: {},
    branchAction_editContract: {},
    branchAction_editScreens: {},
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "General Info",
          schema: "branchAction_editGeneralInfo",
        },
        {
          name: "Location",
          schema: "branchAction_editLocation",
        },
        {
          name: "Contract",
          schema: "branchAction_editContract",
        },
        {
          name: "Screens",
          schema: "branchAction_editScreens",
        },
      ],
    },
  },
};
