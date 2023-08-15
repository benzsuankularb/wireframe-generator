import { ActionSchema } from "../../framework/schemas";

export const seatCategoryAction_editGeneralInfo: ActionSchema = {
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
    thumbnail: {
      typeDef: {
        type: "image",
        resolution: {
          height: 256,
          width: 256,
        },
      },
    },
    privilegeInfo: {
      typeDef: {
        type: "string",
      },
    },
  },
  layout: {
    name: {
      component: "Text_FormField",
      attributes: {
        label: "Name",
        target: "name",
      },
    },
    shortName: {
      component: "Text_FormField",
      attributes: {
        label: "Short Name",
        target: "shortName",
      },
    },
    thumbnail: {
      component: "ImageUpload_FormField",
      attributes: {
        label: "Thumbnail",
        target: "thumbnail",
      },
    },
    privilegeInfo: {
      component: "FreeText_FormField",
      attributes: {
        label: "Privilege Info",
        target: "privilegeInfo",
      },
    },
  },
};
