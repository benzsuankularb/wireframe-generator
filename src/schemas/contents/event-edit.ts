import { SelectorSchema } from "../../framework/schema";

export const eventEdit: SelectorSchema = {
  type: "selector",
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "General Info",
          schema: "editGeneralInfo",
        },
        {
          name: "Period",
          schema: "editPeriod",
        },
      ],
    },
  },
};
