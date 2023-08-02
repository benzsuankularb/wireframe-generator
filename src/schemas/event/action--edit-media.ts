import { ActionSchema } from "../../framework/schemas";

export const eventAction_editMedia: ActionSchema = {
  type: "action",
  fields: {
    posters: {
      required: true,
      typeDef: {
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
    agenda: {
      required: true,
      typeDef: {
        type: "image",
        resolution: {
          width: 1280,
          height: 720,
        },
      },
    },
    agendaLink: {
      required: true,
      typeDef: {
        type: "string",
        format: "url",
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
    agenda: {
      component: "ImageUpload_FormField",
      size: "1/2",
      attributes: {
        label: "Agenda Image",
        resolution: {
          width: 1280,
          height: 720,
        },
        target: "agenda",
      },
    },
    agendaLink: {
      component: "Text_FormField",
      attributes: {
        label: "Agenda URL",
        target: "agendaLink",
      },
    },
  },
};
