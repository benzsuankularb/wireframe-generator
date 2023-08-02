import { ActionSchema } from "../../framework/schemas";

export const screenAction_editSponsor: ActionSchema = {
  type: "action",
  fields: {
    sponsorLogo: {
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
    sponsorLogo: {
      component: "ImageUpload_FormField",
      attributes: {
        label: "Sponsor Logo",
        target: "sponsorLogo",
      },
      docs: [
        "The screen logo will be fallback to default logo if this is empty.",
      ],
    },
  },
};
