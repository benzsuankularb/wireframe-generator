import { ActionSchema } from "../../framework/schemas";

export const branchAction_editCurrency: ActionSchema = {
  type: "action",
  fields: {
    mainCurrency: {
      typeDef: {
        type: "entity",
        class: "Currency",
        displayFormat: "%name",
        fields: {
          name: {
            type: "string",
          },
        },
      },
    },
    allowCurrencies: {
      typeDef: {
        type: "entity",
        class: "Currency",
        displayFormat: "%name",
        fields: {
          name: {
            type: "string",
          },
        },
      },
    },
    exchangeRates: {
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "object",
          fields: {
            activeUntil: {
              type: "dateTime",
            },
            rate: {
              type: "number",
              step: 0.0001,
              min: 0.0001,
            },
            currency: {
              type: "entity",
              class: "Currency",
            },
          },
        },
      },
    },
  },
  layout: {
    mainCurrency: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Main Currency",
        target: "mainCurrency",
      },
    },
    allowCurrencies: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Allow Currencies",
        target: "allowCurrencies",
      },
    },
    exchangeRates: {
      component: "BranchCurrencyExchangeRates_FormField",
      attributes: {
        label: "Exchange Rates",
        target: "exchangeRates",
      },
    },
  },
};
