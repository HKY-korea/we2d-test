import Joi from 'joi-browser';
import customError from './customError';

const validate = ({ data, schema }) => {
  const result = Joi.validate(data, schema, {abortEarly: false});

  if (!result.error) return null;

  const instErrors = {};
  for (let item of result.error.details)
    instErrors[item.path[0]] = customError(item.type);
  return instErrors;
}

const validateProperty = (name, value, schema) => {
  const obj = {[name]: value};
  const instSchema = {[name]: schema[name]};
  const result = Joi.validate(obj, instSchema);

  return result.error ? customError(result.error.details[0].type) : null;
}

export {
  validate,
  validateProperty
};