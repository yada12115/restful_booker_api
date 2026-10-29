
import { test, expect } from '@playwright/test';
import Ajv from 'ajv';

import bookingSchema from '../../../schemas/booking-schemas.json';


const ajv = new Ajv();
const validate = ajv.compile(bookingSchema);

test('Validate booking schema', async ({ request }) => {
  const response = await request     .get(
    'https://restful-booker.herokuapp.com/booking/1'
  );

  expect(response.status()).toBe(200);

  const data = await response.json();

  const isValid = validate(data);

  expect(isValid, JSON.stringify(validate.errors)).toBe(true);
});
  

