import { ActionSchema } from "../../framework/schemas";

export const dealAction_editUsageMethod: ActionSchema = {
  type: "action",
  fields: {
    method: {
      typeDef: {
        type: "string",
        enum: [
          "default",
          "credit card vendor",
          "promo code",
          "coupon code", //
        ],
      },
    },
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
    couponCodes: {
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "entity",
          class: "CouponCode",
          displayFormat: "%name",
          fields: {
            name: {
              type: "string",
            },
          },
        },
      },
    },
    creditCardVendor: {
      typeDef: {
        type: "entity",
        class: "CreditCardVendor",
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
    method: {
      component: "ValuePicker_FormField",
      attributes: {
        label: "Method",
        target: "method",
      },
      samples: [
        "Default",
        "Promo Code",
        "Voucher Code",
        "Credit Card",
        "Credit Card Point Redemption",
      ],
    },
    promoCodes: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Promo Codes",
        target: "promoCodes",
      },
      docs: ["Only visible when usage method is `Promo Code`"],
    },
    couponCodes: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Coupon Codes",
        target: "couponCodes",
      },
      docs: ["Only visible when usage method is `Coupon Code`"],
    },
    creditCardVendor: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Credit Card Vendor",
        target: "creditCardVendor",
      },
      docs: ["Only visible when usage method is `Credit Card Vendor`"],
    },
  },
};
