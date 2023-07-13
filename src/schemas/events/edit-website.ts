import { ActionSchema } from "../../framework/schema";

export const event_editWebsite: ActionSchema = {
  type: "action",
  fields: {
    link: {
      required: true,
      typeDef: {
        type: "string",
        format: "url",
      },
    },
    headerName: {
      required: true,
      typeDef: {
        type: "string",
      },
    },
    alternateHeaderName: {
      typeDef: {
        type: "string",
      },
    },
    graphicLink: {
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
      },
    },
    agenda: {
      component: "ImageUpload_FormField",
      size: "1/2",
      attributes: {
        label: "Agenda Image",
      },
    },
    agendaLink: {
      component: "Text_FormField",
      attributes: {
        label: "Agenda URL",
      },
    },
  },
};
