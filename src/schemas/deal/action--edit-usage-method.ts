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
    voucherCodes: {
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
    creditCardProvider: {
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
  },
  layout: {
    promoCodes: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        toggle: "usePromoCodes",
        label: "Promo Codes",
        target: "promoCodes",
      },
    },
    voucherCodes: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        toggle: "useVoucherCodes",
        label: "Coupon Codes",
        target: "voucherCodes",
      },
    },
    pointRedemption: {
      component: "EntityPicker_FormField",
      attributes: {
        toggle: "usePointRedemption",
        label: "Point Redemption",
        target: "pointRedemption",
      },
    },
    creditCardProvider: {
      component: "EntityPicker_FormField",
      attributes: {
        toggle: "useCreditCardProvider",
        label: "Credit Card Provider",
        target: "creditCardProvider",
      },
    },
  },
};
