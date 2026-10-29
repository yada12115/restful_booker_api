import { test, expect } from '../../../fixtures/api-fixture';
import { createBookingData } from '../../../data/booking-data';
 import Ajv from 'ajv'


test('Delete booking', async ({request, bookingApi }) => {
  const bookingData = createBookingData();
  const createResponse = await bookingApi.createBooking(request,bookingData);
  expect(createResponse.status()).toBe(200);
  const createBody = await createResponse.json();
  console.log("delete responce", createBody)
  const bookingId = createBody.bookingid;
  console.log('Created ID:', bookingId);
  // DELETE
  const deleteResponse = await bookingApi.deleteBooking(request,bookingId);
  expect([200, 201, 204]).toContain(deleteResponse.status());
  // VERIFY DELETE
  const responseAfterDelete = await bookingApi.getBooking(request,bookingId);
  expect(responseAfterDelete.status()).toBe(404);
});