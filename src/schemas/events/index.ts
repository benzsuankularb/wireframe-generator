import { eventAction_editContents } from "./action--edit-contents";
import { eventAction_editGeneralInfo } from "./action--edit-general-info";
import { eventAction_editMedia } from "./action--edit-media";
import { eventAction_editPeriod } from "./action--edit-period";
import { eventAction_editSaleRestrictions } from "./action--edit-sale-restrictions";
import { eventAction_editWebsite } from "./action--edit-website";
import { eventSelector_edit } from "./selector--edit";

export const eventSchemas = {
  eventSelector_edit,
  eventAction_editGeneralInfo,
  eventAction_editPeriod,
  eventAction_editSaleRestrictions,
  eventAction_editWebsite,
  eventAction_editMedia,
  eventAction_editContents,
};
