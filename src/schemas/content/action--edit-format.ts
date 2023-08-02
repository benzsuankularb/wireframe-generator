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
        class: "ContentFormat",
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
        target: "formatOptions",
      },
      size: "1/2",
      docs: ["Empty is allowed"],
      samples: ["3D", "2D", "IMAX"],
    },
    categories: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Content Categories",
        target: "categories",
      },
      size: "1/2",
      docs: ["Empty is allowed"],
      samples: ["Horror", "Action", "Comedy"],
    },
    audioLanguageOptions: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Audio Language Options",
        target: "audioLanguageOptions",
      },
      size: "1/2",
    },
    defaultAudioLanguage: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Default Audio Language",
        target: "defaultAudioLanguage",
      },
      size: "1/2",
    },
    subtitleLanguageOptions: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Subtitle Language Options",
        target: "subtitleLanguageOptions",
      },
      size: "1/2",
    },
    defaultSubtitleLanguage: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Default Subtitle Language",
        target: "defaultSubtitleLanguage",
      },
      size: "1/2",
    },
  },
};
