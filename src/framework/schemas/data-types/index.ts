export type TypeDefinition =
  | TypeDefinition_String
  | TypeDefinition_Localized
  | TypeDefinition_Nullable
  | TypeDefinition_Number
  | TypeDefinition_Boolean
  | TypeDefinition_Entity
  | TypeDefinition_Array
  | TypeDefinition_Object
  | TypeDefinition_Image
  | TypeDefinition_DateTime;

export type ObjectDefinition = { [name: string]: TypeDefinition };

export type TypeDefinition_String = {
  type: "string";
  enum?: string[];
  min?: number;
  max?: number;
  format?: "url" | "email" | "integer" | { regex: string; name: string };
};

export type TypeDefinition_Localized = {
  type: "localized";
  itemTypeDef: TypeDefinition;
  locales: string[];
  requiredLocales?: "all" | "first" | "none";
};

export type TypeDefinition_Nullable = {
  type: "nullable";
  typeDef: TypeDefinition;
};

export type TypeDefinition_Number = {
  type: "number";
  min?: number;
  max?: number;
};

export type TypeDefinition_Boolean = {
  type: "boolean";
};

export type TypeDefinition_Entity = {
  type: "entity";
  class?: string;
  displayFormat?: string;
  fields: ObjectDefinition;
};

export type TypeDefinition_Array = {
  type: "array";
  itemTypeDef: TypeDefinition;
  min?: number;
  max?: number;
};

export type TypeDefinition_Object = {
  type: "object";
  fields: ObjectDefinition;
};

export type TypeDefinition_Image = {
  type: "image";
  resolution?: { width: number; height: number };
};

export type TypeDefinition_DateTime = {
  type: "dateTime";
  before?: number | "now";
  after?: number | "now";
  dateOnly?: boolean;
};
