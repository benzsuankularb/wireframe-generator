import { ActionSchema } from "../../framework/schemas";

export const dealAction_editUsageMethod: ActionSchema = {
  type: "action",
  fields: {
    promoCodes: {
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "entity",
          class: "PromoCode",
          displayFormat: "%name",
          fields: {
            name: {
              type: "string",
            },
          },
        },
      },
    },
    vouchers: {
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "entity",
          class: "VoucherCode",
          displayFormat: "%name",
          fields: {
            name: {
              type: "string",
            },
          },
        },
      },
    },
    creditCardProviders: {
      typeDef: {
        type: "entity",
        class: "CreditCardProvider",
        displayFormat: "%name",
        fields: {
          name: {
            type: "string",
          },
        },
      },
    },
    privileges: {
      typeDef: {
        type: "entity",
        class: "Privilege",
        displayFormat: "%name",
        fields: {
          name: {
            type: "string",
          },
        },
      },
    },
  },
  layout: {
    promoCodes: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Promo Codes",
        target: "promoCodes",
      },
    },
    vouchers: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Vouchers",
        target: "vouchers",
      },
    },
    pointRedemptions: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Point Redemptions",
        target: "pointRedemptions",
      },
    },
    creditCardProviders: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Credit Card Providers",
        target: "creditCardProviders",
      },
    },
    privileges: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Privileges",
        target: "privileges",
      },
    },
  },
};
