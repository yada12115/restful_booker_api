import dotenv from 'dotenv';

const environment = "qa";

dotenv.config(
    {path:'.env.'+environment}
);

export const env = {
  baseUrl: process.env.BASE_URL!,
  username: process.env.AUTH_USERNAME!,
  password:process.env.AUTH_PASSWORD!,
};