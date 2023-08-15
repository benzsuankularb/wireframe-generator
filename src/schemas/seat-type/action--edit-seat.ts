import { ActionSchema } from "../../framework/schemas";

export const seatTypeAction_editSeat: ActionSchema = {
  type: "action",
  fields: {
    seatCategory: {
      typeDef: {
        type: "entity",
        class: "Seat Category",
      },
    },
    seatCount: {
      typeDef: {
        type: "number",
        min: 1,
        max: 99,
      },
    },
    sellCount: {
      typeDef: {
        type: "number",
        min: 1,
        max: 99,
      },
    },
    icon: {
      typeDef: {
        type: "image",
      },
    },
  },
  layout: {
    seatCategory: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Seat Category",
        target: "seatCategory",
      },
      docs: ["Indicate the physical seat. e.g. First Class"],
    },
    seatCount: {
      component: "Text_FormField",
      size: "1/2",
      attributes: {
        label: "Seat Count",
        target: "seatCount",
      },
    },
    sellCount: {
      component: "Text_FormField",
      size: "1/2",
      attributes: {
        label: "Sell Count",
        target: "sellCount",
      },
      docs: ["Sell count must be less than or equal to seat count"],
    },
    icon: {
      component: "ImageUpload_FormField",
      attributes: {
        label: "Icon",
        target: "icon",
      },
      docs: [
        "Used in screen layout manager",
        "Used when customer picking seats in the screen",
        "The resolution is depending on the seat count",
        "e.g. 100x100 when continuous seat is 1",
        "200x100 when continuous seat is 2",
      ],
    },
  },
};
