import { sessionAction_editDuration } from "./action--edit-duration";
import { sessionAction_editEvent } from "./action--edit-event";
import { sessionAction_editProgram } from "./action--edit-program";
import { sessionAction_editSaleRestrictions } from "./action--edit-sale-restrictions";
import { sessionAction_editStatus } from "./action--edit-status";
import { sessionAction_editTiming } from "./action--edit-timing";
import { sessionSelector_programEdit } from "./selector--program-edit";
import { sessionSelector_showtimeEdit } from "./selector--showtime-edit";

export const sessionSchemas = {
  sessionAction_editSaleRestrictions,
  sessionAction_editProgram,
  sessionAction_editStatus,
  sessionAction_editEvent,
  sessionAction_editTiming,
  sessionAction_editDuration,
  sessionSelector_programEdit,
  sessionSelector_showtimeEdit,
};
