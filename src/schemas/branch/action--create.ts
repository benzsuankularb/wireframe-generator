import { ActionSchema } from "../../framework/schemas";
import { branchAction_editGeneralInfo } from "./action--edit-general-info";

function transformFieldsFromActionSchema(
  action: ActionSchema,
  fieldPrefix: string
) {
  return Object.fromEntries(
    Object.entries(action.fields).map((entry) => [
      `${fieldPrefix}_${entry[0]}`,
      entry[1],
    ])
  );
}

function transformLayoutsFromActionSchema(
  action: ActionSchema,
  fieldPrefix: string
) {
  return Object.fromEntries(
    Object.entries(action.layout).map((entry) => [
      `${fieldPrefix}_${entry[0]}`,
      entry[1],
    ])
  );
}

export const branchAction_create: ActionSchema = {
  type: "action",
  fields: {
    ...transformFieldsFromActionSchema(
      branchAction_editGeneralInfo,
      "generalInfo_"
    ),
    ...transformFieldsFromActionSchema(
      branchAction_editGeneralInfo,
      "contract_"
    ),
    ...transformFieldsFromActionSchema(
      branchAction_editGeneralInfo,
      "location_"
    ),
    ...transformFieldsFromActionSchema(
      branchAction_editGeneralInfo,
      "currency_"
    ),
  },
  layout: {
    ...transformLayoutsFromActionSchema(
      branchAction_editGeneralInfo,
      "generalInfo_"
    ),
    ...transformLayoutsFromActionSchema(
      branchAction_editGeneralInfo,
      "contract_"
    ),
    ...transformLayoutsFromActionSchema(
      branchAction_editGeneralInfo,
      "location_"
    ),
    ...transformLayoutsFromActionSchema(
      branchAction_editGeneralInfo,
      "currency_"
    ),
  },
};
