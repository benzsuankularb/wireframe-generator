import { ActionSchema } from "../../framework/schemas";

export const screenAction_editGeneralInfo: ActionSchema = {
  type: "action",
  fields: {
    branch: {
      typeDef: {
        type: "entity",
        class: "Branch",
        displayFormat: "%brand %name",
        fields: {
          name: {
            type: "string",
          },
          brand: {
            type: "string",
          },
        },
      },
    },
    name: {
      typeDef: {
        type: "localized",
        locales: ["en", "th"],
        itemTypeDef: {
          type: "string",
        },
      },
    },
    number: {
      typeDef: {
        type: "number",
        max: 100,
      },
    },
    projectorSystem: {
      typeDef: {
        type: "entity",
        class: "ScreenProjectorSystem",
        displayFormat: "%name",
        fields: {
          name: {
            type: "string",
          },
        },
      },
    },
    soundSystem: {
      typeDef: {
        type: "entity",
        class: "ScreenSoundSystem",
        displayFormat: "%name",
        fields: {
          name: {
            type: "string",
          },
        },
      },
    },
    defaultLogo: {
      typeDef: {
        type: "image",
        resolution: {
          height: 300,
          width: 90,
        },
      },
    },
  },
  layout: {
    branch: {
      component: "EntityPicker_FormField",
      size: "1/2",
      attributes: {
        label: "Branch",
        target: "branch",
      },
    },
    number: {
      component: "Text_FormField",
      size: "1/2",
      attributes: {
        label: "Number",
        target: "number",
      },
      docs: ["Will get error if the number is used by other screen."],
    },
    name: {
      component: "Text_FormField",
      size: "1/2",
      attributes: {
        label: "Name",
        target: "name",
      },
    },
    projectorSystem: {
      component: "EntityPicker_FormField",
      size: "1/2",
      attributes: {
        label: "Projector System",
        target: "projectorSystem",
      },
    },
    soundSystem: {
      component: "EntityPicker_FormField",
      size: "1/2",
      attributes: {
        label: "Sound System",
        target: "soundSystem",
      },
    },
    defaultLogo: {
      component: "ImageUpload_FormField",
      attributes: {
        label: "Default Logo",
        target: "defaultLogo",
      },
    },
  },
};
