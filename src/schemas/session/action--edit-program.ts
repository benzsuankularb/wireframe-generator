import { ActionSchema } from "../../framework/schemas";

export const sessionAction_editProgram: ActionSchema = {
  type: "action",
  fields: {
    format: {
      allowBulk: true,
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
    audioLanguage: {
      allowBulk: true,
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
    subtitleLanguage: {
      allowBulk: true,
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
    sneakPreview: {
      allowBulk: true,
      typeDef: {
        type: "boolean",
      },
    },
  },
  layout: {
    format: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Content Format",
        target: "format",
      },
      samples: ["3D", "2D", "IMAX"],
    },
    audioLanguage: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Audio Language",
        target: "audioLanguage",
      },
    },
    subtitleLanguage: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Subtitle Language",
        target: "subtitleLanguage",
      },
    },
    sneakPeak: {
      component: "Toggle_FormField",
      attributes: {
        label: "Sneak Peak",
        target: "sneakPeak",
      },
    },
  },
};
