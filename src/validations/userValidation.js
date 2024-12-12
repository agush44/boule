import Joi from "joi";

const registerSchemaJoi = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required().messages({
    "string.alphanum": "Username can only contain alphanumeric characters.",
    "string.min": "Username must be at least 3 characters long.",
    "string.max": "Username cannot exceed 30 characters.",
    "any.required": "Username is required.",
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters long.",
    "any.required": "Password is required.",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Must be a valid email address.",
    "any.required": "Email is required.",
  }),
});

const loginSchemaJoi = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required().messages({
    "string.alphanum": "Username can only contain alphanumeric characters.",
    "string.min": "Username must be at least 3 characters long.",
    "string.max": "Username cannot exceed 30 characters.",
    "any.required": "Username is required.",
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters long.",
    "any.required": "Password is required.",
  }),
});

export { registerSchemaJoi, loginSchemaJoi };
