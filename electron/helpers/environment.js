import Joi from 'joi'

require('dotenv').config()

// define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow(['development', 'production', 'test', 'provision'])
    .default('development'),
}).unknown()
  .required()

const {error, value: envVars} = Joi.validate(process.env, envVarsSchema)
if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

const environment = {
  isProduction: envVars.NODE_ENV === 'production' || true
}

export default environment





