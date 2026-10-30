
import { test, expect } from '../../../fixtures/api-fixture';
import Ajv from 'ajv';
import bookingSchema from '../../../schemas/booking-schemas.json';
import { createBookingData } from '../../../data/booking-data';

const ajv = new Ajv({ allErrors: true });
const validate = ajv.compile(bookingSchema);



test('Validate booking schema', async ({ request, bookingApi }) => {
  const bookingData = createBookingData();
  const createResponse = await bookingApi.createBooking(request,bookingData);
  const createBody = await createResponse.json();
  const bookingId = createBody.bookingid;
  const response = await bookingApi.getBooking(request, bookingId);
  expect(response.status()).toBe(200);
  const data = await response.json();
  const isValid = validate(data);
  console.log('Schema Validation Result:', isValid);
  if (!isValid) {
    console.log('Schema Errors:', validate.errors);
  }
  expect(isValid).toBe(true);
  console.log('Booking Schema Validation Passed!');
});