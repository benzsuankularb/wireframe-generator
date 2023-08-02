import { ActionSchema } from "../../framework/schemas";

export const branchAction_editGeneralInfo: ActionSchema = {
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
    brand: {
      typeDef: {
        type: "entity",
        class: "Brand",
        displayFormat: "%name",
        fields: {
          name: {
            type: "string",
          },
        },
      },
    },
    company: {
      typeDef: {
        type: "entity",
        class: "Company",
        displayFormat: "%name",
        fields: {
          name: {
            type: "string",
          },
        },
      },
    },
    currency: {
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
    brand: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Brand",
        target: "brand",
      },
    },
    company: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Company",
        target: "company",
      },
    },
    currency: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Currency",
        target: "currency",
      },
    },
  },
};
