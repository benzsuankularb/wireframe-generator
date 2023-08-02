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
        type: "localized",
        locales: ["en", "th"],
        itemTypeDef: {
          type: "string",
        },
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
        target: "link",
      },
    },
    headerName: {
      component: "Text_FormField",
      attributes: {
        label: "Header Name",
        target: "headerName",
      },
    },
    graphicLink: {
      component: "Text_FormField",
      attributes: {
        label: "Graphic URL",
        target: "graphicLink",
      },
    },
  },
};
