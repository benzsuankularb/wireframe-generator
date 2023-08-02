import { ActionSchema } from "../../framework/schemas";

export const contentAction_editMedia: ActionSchema = {
  type: "action",
  fields: {
    posters: {
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "localized",
          locales: ["en", "th"],
          itemTypeDef: {
            type: "image",
            resolution: {
              width: 1280,
              height: 720,
            },
          },
        },
      },
    },
    banner: {
      typeDef: {
        type: "localized",
        locales: ["en", "th"],
        itemTypeDef: {
          type: "image",
          resolution: {
            width: 1280,
            height: 720,
          },
        },
      },
    },
    shareBanner: {
      typeDef: {
        type: "localized",
        locales: ["en", "th"],
        itemTypeDef: {
          type: "image",
          resolution: {
            width: 1280,
            height: 720,
          },
        },
      },
    },
    videoLinks: {
      typeDef: {
        type: "localized",
        locales: ["en", "th"],
        itemTypeDef: {
          type: "array",
          itemTypeDef: {
            type: "string",
            format: "url",
          },
        },
      },
    },
  },
  layout: {
    posters: {
      component: "ImageMultiUpload_FormField",
      attributes: {
        label: "Posters",
        target: "posters",
      },
    },
    banner: {
      component: "ImageUpload_FormField",
      size: "1/2",
      attributes: {
        label: "Banner",
        target: "banner",
      },
    },
    shareBanner: {
      component: "ImageUpload_FormField",
      size: "1/2",
      attributes: {
        label: "Share Banner",
        target: "shareBanner",
      },
    },
    videoLinks: {
      component: "TextItems_FormField",
      attributes: {
        label: "Video Links",
        target: "videoLinks",
      },
    },
  },
};
