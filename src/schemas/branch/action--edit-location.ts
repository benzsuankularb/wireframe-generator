import { ActionSchema } from "../../framework/schemas";

export const branchAction_editLocation: ActionSchema = {
  type: "action",
  fields: {
    country: {
      typeDef: {
        type: "entity",
        class: "Country",
        displayFormat: "%name",
        fields: {
          name: {
            type: "string",
          },
        },
      },
    },
    zone: {
      typeDef: {
        type: "entity",
        class: "CountryZone",
        displayFormat: "%province %name",
        fields: {
          province: {
            type: "string",
          },
          name: {
            type: "string",
          },
        },
      },
    },
  },
  layout: {
    country: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Country",
        target: "country",
      },
    },
    zone: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Zone",
        target: "zone",
      },
    },
  },
};
