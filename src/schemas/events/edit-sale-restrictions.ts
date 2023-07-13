import { ActionSchema } from "../../framework/schema";

export const event_editSaleRestrictions: ActionSchema = {
  type: "action",
  fields: {
    member: {
      required: true,
      typeDef: {
        type: "boolean",
      },
    },
    memberTypes: {
      required: true,
      typeDef: {
        nullable: true,
        type: "array",
        itemTypeDef: {
          type: "entity",
          class: "MemberType",
          fields: {
            name: {
              type: "string",
            },
          },
        },
      },
    },
    promocodes: {
      required: true,
      typeDef: {
        nullable: true,
        type: "entity",
        class: "Promocode",
        fields: {
          name: {
            type: "string",
          },
        },
      },
    },
    payments: {
      required: true,
      typeDef: {
        type: "array",
        itemTypeDef: {
          nullable: true,
          type: "entity",
          class: "MemberType",
          fields: {
            name: {
              type: "string",
            },
          },
        },
      },
    },
  },
  layout: {
    member: {
      component: "Toggle_FormField",
      size: "1/2",
      attributes: {
        label: "Member Only",
      },
    },
    memberTypes: {
      component: "EntityMultiPicker_FormField",
      size: "1/2",
      attributes: {
        label: "Member Typesx",
        useNullAsAll: true,
        hideWhen: [
          {
            field: "member",
            is: false,
          },
        ],
      },
    },
    promocodes: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "End Date",
        searchable: true,
      },
    },
    payments: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Payment Channel",
        useNullAsAll: true,
      },
    },
  },
};
