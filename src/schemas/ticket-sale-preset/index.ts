import { ticketSalePresetAction_editActivation } from "./action--edit-activation";
import { ticketSalePresetAction_editDealRestrictions } from "./action--edit-deal-restrictions";
import { ticketSalePresetAction_editGeneralInfo } from "./action--edit-general-info";
import { ticketSalePresetAction_editLayout } from "./action--edit-layout";
import { ticketSalePresetAction_editPriceCards } from "./action--edit-price-cards";
import { ticketSalePresetAction_editSaleRestrictions } from "./action--edit-sale-restrictions";
import { ticketSalePresetAction_editSessionScopes } from "./action--edit-session-scopes";
import { ticketSalePresetSelector_edit } from "./selector--edit";
import { ticketSalePresetSelector_editLayout } from "./selector--edit-layout";

export const ticketSalePresetSchemas = {
  ticketSalePresetAction_editGeneralInfo,
  ticketSalePresetAction_editDealRestrictions,
  ticketSalePresetAction_editSaleRestrictions,
  ticketSalePresetAction_editActivation,
  ticketSalePresetAction_editPriceCards,
  ticketSalePresetAction_editLayout,
  ticketSalePresetAction_editSessionScopes,
  ticketSalePresetSelector_editLayout,
  ticketSalePresetSelector_edit,
};
