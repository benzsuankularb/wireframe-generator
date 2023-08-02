import { ColorPicker_FormField } from "./color-picker--form-field";
import { CurrencyAmount_FormField } from "./currency-amount--form-field";
import { DatePicker_FormField } from "./date-picker--form-field";
import { EntityMultiPicker_FormField } from "./entity-multi-picker--form-field";
import { EntityPicker_FormField } from "./entity-picker--form-field";
import { EntityTable_FormField } from "./entity-table--form-field";
import { FreeText_FormField } from "./free-text--form-field";
import { GeolocationPicker_FormField } from "./geolocation-picker--form-field";
import { ImageMultiUpload_FormField } from "./image-multi-upload--form-field";
import { ImageUpload_FormField } from "./image-upload--form-field";
import { ReadOnly_FormField } from "./read-only--form-field";
import { Text_FormField } from "./text--form-field";
import { TextItems_FormField } from "./text-items--form-field";
import { Toggle_FormField } from "./toggle--form-field";
import { ValuePicker_FormField } from "./value-picker--form-field";

export const formFieldComponents = {
  DatePicker_FormField,
  Text_FormField, // Support i18n, multiple
  FreeText_FormField, // Wyswig
  Toggle_FormField,
  ValuePicker_FormField, // Radio, dropdown
  ImageUpload_FormField, // Support i18n
  ImageMultiUpload_FormField, // Support i18n
  ReadOnly_FormField, // Support multiple types
  ColorPicker_FormField,
  GeolocationPicker_FormField,
  TextItems_FormField,
  EntityPicker_FormField,
  EntityMultiPicker_FormField,
  EntityTable_FormField,
  CurrencyAmount_FormField,

  // Number_FormField,
};
