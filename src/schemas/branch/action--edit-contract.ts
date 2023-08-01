import { ActionSchema } from "../../framework/schemas";

export const branchAction_editContract: ActionSchema = {
  type: "action",
  fields: {
    phone1: {
      typeDef: {
        type: "string",
      },
    },
    phone2: {
      typeDef: {
        type: "string",
      },
    },
    fax: {
      typeDef: {
        type: "string",
      },
    },
    openHours: {
      typeDef: {
        type: "localized",
        locales: ["en", "th"],
        itemTypeDef: {
          type: "string",
        },
      },
    },
    transportation: {
      typeDef: {
        type: "localized",
        locales: ["en", "th"],
        itemTypeDef: {
          type: "string",
        },
      },
    },
    geolocation: {
      typeDef: {
        type: "string",
      },
    },
  },
  layout: {
    phone1: {
      component: "Text_FormField",
      attributes: {
        label: "Phone 1",
      },
      target: "phone1",
    },
    phone2: {
      component: "Text_FormField",
      attributes: {
        label: "Phone 2",
      },
      target: "phone2",
    },
    fax: {
      component: "Text_FormField",
      attributes: {
        label: "Fax",
      },
      target: "fax",
    },
    openHours: {
      component: "FreeText_FormField",
      attributes: {
        label: "Opening Hours",
      },
      target: "openHours",
    },
    transportation: {
      component: "FreeText_FormField",
      attributes: {
        label: "Transportation",
      },
      target: "transportation",
    },
    geolocation: {
      component: "GeolocationPicker_FormField",
      attributes: {
        label: "Map Position",
      },
      target: "geolocation",
    },
  },
};
