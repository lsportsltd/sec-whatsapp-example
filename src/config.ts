const envSchema = {
  type: "object",
  required: [
    "TWILIO_ACCOUNT_SID",
    "TWILIO_AUTH_TOKEN",
    "TWILIO_PHONE_NUMBER",
    "SEC_API_TOKEN",
  ],
  properties: {
    TWILIO_ACCOUNT_SID: {
      type: "string",
    },
    TWILIO_AUTH_TOKEN: {
      type: "string",
    },
    TWILIO_PHONE_NUMBER: {
      type: "string",
    },
    SEC_API_TOKEN: {
      type: "string",
    },
  },
};

export const envOptions = {
  confKey: "config", // optional, default: 'config'
  schema: envSchema,
  dotenv: true,
  data: process.env,
};
