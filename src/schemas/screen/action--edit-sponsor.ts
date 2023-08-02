import { ActionSchema } from "../../framework/schemas";

export const screenAction_editSponsor: ActionSchema = {
  type: "action",
  fields: {
    sponsorLogos: {
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "object",
          fields: {
            activeUntil: {
              type: "dateTime",
            },
            logo: {
              type: "image",
              resolution: {
                height: 300,
                width: 90,
              },
            },
          },
        },
      },
    },
  },
  layout: {
    sponsorLogos: {
      component: "ScreenSponsorLogosUpload_FormField",
      attributes: {
        label: "Sponsor Logos",
        target: "sponsorLogos",
      },
      docs: [
        "The screen logo will be fallback to default logo if this is empty.",
      ],
    },
  },
};
