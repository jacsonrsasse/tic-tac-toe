import { AnyZodObject } from "zod";

const schemaTypeValidator = (schema: AnyZodObject, value: any): boolean => {
  try {
    schema.parse(value);
    return true;
  } catch (error) {
    return false;
  }
};

export default schemaTypeValidator;
