import { priceCardAction_editActivation } from "./action--edit-activation";
import { priceCardAction_editDealRestrictions } from "./action--edit-deal-restrictions";
import { priceCardAction_editGeneralInfo } from "./action--edit-general-info";
import { priceCardAction_editPricing } from "./action--edit-pricing";
import { priceCardAction_editSaleRestrictions } from "./action--edit-sale-restrictions";
import { priceCardSelector_edit } from "./selector--edit";

export const priceCardSchemas = {
  priceCardAction_editDealRestrictions,
  priceCardAction_editSaleRestrictions,
  priceCardAction_editGeneralInfo,
  priceCardAction_editActivation,
  priceCardAction_editPricing,
  priceCardSelector_edit,
};
