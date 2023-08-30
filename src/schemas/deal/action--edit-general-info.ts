import { ActionSchema } from "../../framework/schemas";

export const dealAction_editGeneralInfo: ActionSchema = {
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
    shortName: {
      typeDef: {
        type: "localized",
        locales: ["en", "th"],
        itemTypeDef: {
          type: "string",
        },
      },
    },
    description: {
      typeDef: {
        type: "localized",
        locales: ["en", "th"],
        itemTypeDef: {
          type: "string",
        },
      },
    },
    category: {
      typeDef: {
        type: "string",
        enum: ["deal", "discount"],
      },
    },
    partner: {
      typeDef: {
        type: "entity",
        class: "Partner",
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
    description: {
      component: "Text_FormField",
      attributes: {
        multiline: true,
        label: "Description",
        target: "description",
      },
    },
    category: {
      component: "ValuePicker_FormField",
      attributes: {
        label: "Category",
        target: "category",
        values: {
          deal: "Deal",
          discount: "Discount",
        },
      },
    },
    partner: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Partner",
        target: "partner",
      },
      docs: ["Allow empty"],
    },
  },
};
