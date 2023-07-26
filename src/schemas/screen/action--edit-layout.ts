import { ActionSchema } from "../../framework/schemas";

export const screenAction_editLayout: ActionSchema = {
  type: "action",
  fields: {
    contentType: {
      typeDef: {
        type: "entity",
        class: "ContentType",
        displayFormat: "%name",
        fields: {
          name: {
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
    shortName: {
      typeDef: {
        type: "string",
      },
    },
    distributor: {
      typeDef: {
        type: "entity",
        class: "Distributor",
        displayFormat: "%name",
        fields: {
          name: {
            type: "string",
          },
        },
      },
    },
    releaseDate: {
      typeDef: {
        type: "dateTime",
        dateOnly: true,
      },
    },
    rereleaseDate: {
      typeDef: {
        type: "dateTime",
        dateOnly: true,
      },
    },
  },
  layout: {
    contentType: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Content Type",
      },
      target: "contentType",
      samples: ["Concert", "Movie", "Documentary"],
    },
    name: {
      component: "Text_FormField",
      size: "1/2",
      attributes: {
        label: "Name",
      },
      target: "name",
    },
    shortName: {
      component: "Text_FormField",
      size: "1/2",
      attributes: {
        label: "Short Name",
      },
      target: "shortName",
    },
    distributor: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Distributor",
      },
      target: "distributor",
    },
    releaseDate: {
      component: "DatePicker_FormField",
      attributes: {
        label: "Release Date",
      },
      target: "releaseDate",
    },
    reReleaseDate: {
      component: "DatePicker_FormField",
      attributes: {
        label: "Re-release Date",
      },
      target: "reReleaseDate",
    },
  },
};
