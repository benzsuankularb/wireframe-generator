import { ActionSchema } from "../../framework/schemas";

export const eventAction_editWebsite: ActionSchema = {
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
    link: {
      component: "Text_FormField",
      attributes: {
        label: "Web URL",
      },
    },
    headerName: {
      component: "Text_FormField",
      attributes: {
        label: "Header Name",
      },
    },
    alternateHeaderName: {
      component: "Text_FormField",
      attributes: {
        label: "Header Name (Alt)",
      },
    },
    graphicLink: {
      component: "Text_FormField",
      attributes: {
        label: "Graphic URL",
      },
    },
  },
};
