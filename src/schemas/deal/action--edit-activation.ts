import { ActionSchema } from "../../framework/schemas";

export const dealAction_editActivation: ActionSchema = {
  type: "action",
  fields: {
    enable: {
      typeDef: {
        type: "boolean",
      },
    },
    public: {
      typeDef: {
        type: "boolean",
      },
    },
  },
  layout: {
    name: {
      component: "Toggle_FormField",
      size: "1/2",
      attributes: {
        label: "Enable",
        target: "enable",
      },
    },
    public: {
      component: "Toggle_FormField",
      size: "1/2",
      attributes: {
        label: "Public",
        target: "public",
      },
    },
  },
};
