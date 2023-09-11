import { ColorPicker_FormField } from "./color-picker--form-field";
import { DatePicker_FormField } from "./date-picker--form-field";
import { EntityMultiPicker_FormField } from "./entity-multi-picker--form-field";
import { EntityPicker_FormField } from "./entity-picker--form-field";
import { EntityTable_FormField } from "./entity-table--form-field";
import { FreeText_FormField } from "./free-text--form-field";
import { GeolocationPicker_FormField } from "./geolocation-picker--form-field";
import { ImageMultiUpload_FormField } from "./image-multi-upload--form-field";
import { ImageUpload_FormField } from "./image-upload--form-field";
import { Number_FormField } from "./number--form-field";
import { ObjectTable_FormField } from "./object-table--form-field";
import { Range_FormField } from "./range--form-field";
import { ReadOnly_FormField } from "./read-only--form-field";
import { Selector_FormField } from "./selector--form-field";
import { Text_FormField } from "./text--form-field";
import { StringTable_FormField } from "./text-items--form-field";
import { Toggle_FormField } from "./toggle--form-field";
import { ValuePicker_FormField } from "./value-picker--form-field";

export const formFieldComponents = {
  // Base function supported
  // localized, label, visibleOnTarget

  // Single value
  DatePicker_FormField,
  Text_FormField, // i18n, multiline, nullable
  FreeText_FormField, // wysiwyg, nullable
  ValuePicker_FormField, // value displays
  Toggle_FormField, // nullable
  ImageUpload_FormField, // i18n
  GeolocationPicker_FormField,
  ColorPicker_FormField,
  ReadOnly_FormField,
  EntityPicker_FormField,
  Number_FormField,

  // Multi values
  ImageMultiUpload_FormField, // i18n
  Range_FormField, // number, date, time
  EntityMultiPicker_FormField, // nullable
  ObjectTable_FormField, // orderable, nullable, sortByField, groupByField, uniqueFields, value displays, value suggestion
  StringTable_FormField, // orderable, nullable
  EntityTable_FormField, // orderable, nullable

  // Others
  Selector_FormField,
};
