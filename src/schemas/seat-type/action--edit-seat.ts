import { ActionSchema } from "../../framework/schemas";

export const seatTypeAction_editSeat: ActionSchema = {
  type: "action",
  fields: {
    equivalentPhysicalSeat: {
      typeDef: {
        type: "nullable",
        typeDef: {
          type: "entity",
          class: "SeatType",
        },
      },
    },
    seatCount: {
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
    equivalentPhysicalSeat: {
      component: "EntityPicker_FormField",
      size: "1/2",
      attributes: {
        label: "Same Physical Seat As",
        target: "equivalentPhysicalSeat",
      },
      docs: [
        "Empty mean this seat type is actually the physical seat it self",
        "i.g. Select First Class seat when this is a Single First Class seat",
        "Dropdown will only show seat type which have no 'Same Physical Seat As' value",
      ],
    },
    seatCount: {
      component: "Text_FormField",
      size: "1/2",
      attributes: {
        label: "Seat Count",
        target: "seatCount",
      },
      docs: [
        "If 'Same Physical Seat As' is set, This value will never exceed 'continous seats' of the physical seat", //
      ],
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
        "The resolution is depending on the continous seats",
        "e.g. 100x100 when continuous seat is 1",
        "200x100 when continuous seat is 2",
      ],
    },
  },
};
