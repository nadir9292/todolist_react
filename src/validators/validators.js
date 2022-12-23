import * as yup from "yup"

export const nameValidator = yup
  .string()
  .min(3)
  .max(10)
  .label("Name")
  .matches(/^[aA-zZ\s]+$/, "Only letter is allowed")
