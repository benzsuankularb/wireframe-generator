import { sessionAction_editConfig } from "./action--edit-config";
import { sessionAction_editDuration } from "./action--edit-duration";
import { sessionAction_editProgram } from "./action--edit-program";
import { sessionAction_editSale } from "./action--edit-sale";
import { sessionAction_editStatus } from "./action--edit-status";
import { sessionAction_editTiming } from "./action--edit-timing";
import { sessionSelector_programEdit } from "./selector--program-edit";
import { sessionSelector_showtimeEdit } from "./selector--showtime-edit";

export const sessionSchemas = {
  sessionAction_editSale,
  sessionAction_editProgram,
  sessionAction_editConfig,
  sessionAction_editStatus,
  sessionAction_editTiming,
  sessionAction_editDuration,
  sessionSelector_programEdit,
  sessionSelector_showtimeEdit,
};
