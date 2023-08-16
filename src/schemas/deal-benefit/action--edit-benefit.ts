import { ActionSchema } from "../../framework/schemas";

export const dealBenefitAction_editBenefit: ActionSchema = {
  type: "action",
  fields: {
    //
  },
  layout: {
    useTicketType: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Same as ticket type",
        target: "useTicketType",
      },
      docs: [
        "Allow empty",
        "Only ticket type which filled all values show up on the list",
        "Select a ticket type will make all fields below readonly with the value from selected ticket type",
      ],
    },
    benefits: {
      component: "DealTicketBenefit_FormField",
      attributes: {
        label: "Actions",
      },
      docs: [
        "Action will operate in order from top to bottom",
        "Action could be Upgrade Ticket, Clear Concessions, Add Concession, Price Discount",
        "Price discount source could be Fixed or Ticket Price",
      ],
    },
  },
};
