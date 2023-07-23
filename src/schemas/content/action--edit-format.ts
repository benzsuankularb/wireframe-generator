import { ActionSchema } from "../../framework/schemas";

export const contentAction_editFormat: ActionSchema = {
  type: "action",
  fields: {
    categories: {
      typeDef: {
        type: "entity",
        class: "ContentCategory",
        displayFormat: "%name",
        fields: {
          name: {
            type: "string",
          },
        },
      },
    },
    rating: {
      typeDef: {
        type: "entity",
        class: "ContentRating",
        displayFormat: "%name",
        fields: {
          name: {
            type: "string",
          },
        },
      },
    },
    formatOptions: {
      typeDef: {
        type: "entity",
        class: "ContentFormatOptions",
        displayFormat: "%name",
        fields: {
          name: {
            type: "string",
          },
        },
      },
    },
    audioLanguageOptions: {
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "entity",
          class: "Language",
          displayFormat: "%name",
          fields: {
            name: {
              type: "string",
            },
          },
        },
      },
    },
    defaultAudioLanguage: {
      typeDef: {
        type: "entity",
        class: "Language",
        displayFormat: "%name",
        fields: {
          name: {
            type: "string",
          },
        },
      },
    },
    subtitleLanguageOptions: {
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "entity",
          class: "Language",
          displayFormat: "%name",
          fields: {
            name: {
              type: "string",
            },
          },
        },
      },
    },
    defaultSubtitleLanguage: {
      typeDef: {
        type: "entity",
        class: "Language",
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
    formatOptions: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Content Format Options",
      },
      size: "1/2",
      target: "formatOptions",
      docs: ["Empty is allowed"],
      samples: ["3D", "2D", "IMAX"],
    },
    categories: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Content Categories",
      },
      size: "1/2",
      target: "categories",
      docs: ["Empty is allowed"],
      samples: ["Horror", "Action", "Comedy"],
    },
    audioLanguageOptions: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Audio Language Options",
      },
      size: "1/2",
      target: "audioLanguageOptions",
    },
    defaultAudioLanguage: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Default Audio Language",
      },
      size: "1/2",
      target: "defaultAudioLanguage",
    },
    subtitleLanguageOptions: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Subtitle Language Options",
      },
      size: "1/2",
      target: "subtitleLanguageOptions",
    },
    defaultSubtitleLanguage: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Default Subtitle Language",
      },
      size: "1/2",
      target: "defaultSubtitleLanguage",
    },
  },
};
