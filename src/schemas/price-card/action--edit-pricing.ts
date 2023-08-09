import { ActionSchema } from "../../framework/schemas";

export const priceCardAction_editPricing: ActionSchema = {
  type: "action",
  fields: {
    inheritFrom: {
      typeDef: {
        type: "entity",
        class: "PriceCard",
      },
    },
  },
  layout: {
    inheritFrom: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Inherit Price Card",
        _wireframe: "Explained in Member Price Card Manager",
      },
      docs: [
        "Price will fallback to this price card if there is no price overrided",
      ],
    },
    price: {
      component: "Selector_FormField",
      attributes: {
        label: "Member Price Cards",
        selector: "priceCardItemSelector_manager",
        _wireframe: "Explained in Member Price Card Manager",
      },
    },
  },
};
