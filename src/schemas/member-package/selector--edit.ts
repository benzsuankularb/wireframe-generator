import { SelectorSchema } from "../../framework/schemas";

export const memberPackageSelector_edit: SelectorSchema = {
  type: "selector",
  fields: {},
  actions: {
    memberPackageAction_editGeneralInfo: {},
    memberPackageAction_editSale: {},
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "General Info",
          schema: "memberPackageAction_editGeneralInfo",
        },
        {
          name: "Sale",
          schema: "memberPackageAction_editSale",
        },
      ],
    },
  },
};
