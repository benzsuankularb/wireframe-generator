import { ActionSchema } from "../../framework/schemas";

export const contentAction_editMedias: ActionSchema = {
  type: "action",
  fields: {
    posters: {
      required: true,
      typeDef: {
        type: "localized",
        locales: ["en", "th"],
        itemTypeDef: {
          type: "array",
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
      required: true,
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
      required: true,
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
      required: true,
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
        resolution: {
          width: 1280,
          height: 720,
        },
      },
      target: "posters",
    },
    banner: {
      component: "ImageUpload_FormField",
      size: "1/2",
      attributes: {
        label: "Banner",
        resolution: {
          width: 1280,
          height: 720,
        },
      },
      target: "banner",
    },
    shareBanner: {
      component: "ImageUpload_FormField",
      size: "1/2",
      attributes: {
        label: "Share Banner",
        resolution: {
          width: 1280,
          height: 720,
        },
      },
      target: "share banner",
    },
    videoLinks: {
      component: "TextItems_FormField",
      attributes: {
        label: "Video Links",
      },
      target: "videoLinks",
    },
  },
};
