import { ActionSchema } from "../../framework/schemas";
import { branchAction_editContract } from "./action--edit-contract";
import { branchAction_editCurrency } from "./action--edit-currency";
import { branchAction_editGeneralInfo } from "./action--edit-general-info";
import { branchAction_editLocation } from "./action--edit-location";

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
    ...transformFieldsFromActionSchema(branchAction_editContract, "contract_"),
    ...transformFieldsFromActionSchema(branchAction_editLocation, "location_"),
    ...transformFieldsFromActionSchema(branchAction_editCurrency, "currency_"),
  },
  layout: {
    ...transformLayoutsFromActionSchema(
      branchAction_editGeneralInfo,
      "generalInfo_"
    ),
    ...transformLayoutsFromActionSchema(branchAction_editContract, "contract_"),
    ...transformLayoutsFromActionSchema(branchAction_editLocation, "location_"),
    ...transformLayoutsFromActionSchema(branchAction_editCurrency, "currency_"),
  },
};
