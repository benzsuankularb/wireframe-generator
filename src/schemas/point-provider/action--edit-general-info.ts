import { ActionSchema } from "../../framework/schemas";

export const pointProviderAction_editGeneralInfo: ActionSchema = {
  type: "action",
  fields: {
    systemName: {
      typeDef: {
        type: "string",
      },
    },
    name: {
      typeDef: {
        type: "localized",
        locales: ["en", "th"],
        itemTypeDef: {
          type: "string",
        },
      },
    },
    shortName: {
      typeDef: {
        type: "localized",
        locales: ["en", "th"],
        itemTypeDef: {
          type: "string",
        },
      },
    },
  },
  layout: {
    systemName: {
      component: "ReadOnly_FormField",
      attributes: {
        label: "System Name",
        target: "systemName",
      },
      samples: [
        "krungsri-credit-card",
        "sf-plus-wallet", //
      ],
    },
    name: {
      component: "Text_FormField",
      size: "1/2",
      attributes: {
        label: "Name",
        target: "name",
      },
    },
    shortName: {
      component: "Text_FormField",
      size: "1/2",
      attributes: {
        label: "Short Name",
        target: "shortName",
      },
    },
  },
};
