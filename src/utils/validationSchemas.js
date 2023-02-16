import * as yup from "yup"

export const NAME_SCHEMA = yup.string().required()

export const PASSWORD_SCHEMA = yup
  .string()
  .matches(/^.{4,}$/, "Password must contain  8 characters")
  .required()

export const LOGIN_SCHEMA = yup.object({
  username: NAME_SCHEMA,
  password: PASSWORD_SCHEMA,
})
