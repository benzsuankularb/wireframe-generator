import { DatePicker_FormField } from "./date-picker--form-field";
import { EntityMultiPicker_FormField } from "./entity-multi-picker--form-field";
import { EntityOrderer_FormField } from "./entity-orderer--form-field";
import { EntityPicker_FormField } from "./entity-picker--form-field";
import { ImageMultiUpload_FormField } from "./image-multi-upload--form-field";
import { ImageUpload_FormField } from "./image-upload--form-field";
import { ReadOnly_FormField } from "./read-only--form-field";
import { Text_FormField } from "./text--form-field";
import { TextItems_FormField } from "./text-items--form-field";
import { Toggle_FormField } from "./toggle--form-field";
import { ValuePicker_FormField } from "./value-picker--form-field";

export const formFieldComponents = {
  DatePicker_FormField,
  Text_FormField, // Support i18n
  Toggle_FormField,
  ValuePicker_FormField, // Radio, dropdown
  // FreeText_FormField,
  // Number_FormField,
  ImageUpload_FormField, // Support i18n
  ImageMultiUpload_FormField, // Support i18n
  ReadOnly_FormField, // Support multiple types

  // TODO explain to dev
  TextItems_FormField,
  EntityPicker_FormField,
  EntityMultiPicker_FormField,
  EntityOrderer_FormField,
};
