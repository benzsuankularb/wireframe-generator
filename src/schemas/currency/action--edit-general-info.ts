import { ActionSchema } from "../../framework/schemas";

export const currencyAction_editGeneralInfo: ActionSchema = {
  type: "action",
  fields: {
    name: {
      typeDef: {
        type: "localized",
        locales: ["en", "th"],
        itemTypeDef: {
          type: "string",
        },
      },
    },
    unit: {
      typeDef: {
        type: "localized",
        locales: ["en", "th"],
        itemTypeDef: {
          type: "string",
          max: 10,
          min: 1,
        },
      },
    },
    symbol: {
      typeDef: {
        type: "string",
        max: 1,
        min: 1,
      },
    },
    isDefault: {
      typeDef: {
        type: "boolean",
      },
    },
  },
  layout: {
    name: {
      component: "Text_FormField",
      size: "1/2",
      attributes: {
        label: "Name",
        target: "name",
      },
      samples: ["Thai Baht", "ไทยบาท"],
    },
    unit: {
      component: "Text_FormField",
      size: "1/2",
      attributes: {
        label: "Unit",
        target: "unit",
      },
      samples: ["thb", "บาท"],
    },
    symbol: {
      component: "Text_FormField",
      size: "1/2",
      attributes: {
        label: "Symbol",
        target: "symbol",
      },
      samples: ["฿"],
    },
    isDefault: {
      component: "Toggle_FormField",
      size: "1/2",
      attributes: {
        label: "Use as default currency",
        target: "isDefault",
      },
    },
  },
};
