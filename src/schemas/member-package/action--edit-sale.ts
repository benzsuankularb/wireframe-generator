import { ActionSchema } from "../../framework/schemas";

export const memberPackageAction_editSale: ActionSchema = {
  type: "action",
  fields: {
    price: {
      typeDef: {
        type: "number",
      },
    },
    memberType: {
      typeDef: {
        type: "entity",
        class: "MemberType",
        displayFormat: "%name",
        fields: {
          name: {
            type: "string",
          },
        },
      },
    },
    regcognition: {
      typeDef: {
        type: "entity",
        class: "MemberRegcognition",
        displayFormat: "%name",
        fields: {
          name: {
            type: "string",
          },
        },
      },
    },
    validDays: {
      typeDef: {
        type: "number",
      },
    },
    validTilDate: {
      typeDef: {
        type: "dateTime",
      },
    },
  },
  layout: {
    price: {
      component: "Number_FormField",
      attributes: {
        label: "Price",
        target: "price",
      },
    },
    memberType: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Member Type",
        target: "memberType",
      },
    },
    regcognition: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Regcognition",
        target: "regcognition",
      },
    },
    validDays: {
      component: "Number_FormField",
      attributes: {
        label: "Regcognition Valid Days",
        target: "validDays",
      },
    },
    validTilDate: {
      component: "DatePicker_FormField",
      attributes: {
        label: "Regcognition Valid Until Date",
        target: "validTilDate",
      },
    },
  },
};
