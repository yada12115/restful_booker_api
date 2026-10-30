import { test, expect } from '../../../fixtures/api-fixture';
import { createBookingData } from '../../../data/booking-data';

test('Get booking by ID', async ({request, bookingApi }) => {
  const bookingData = createBookingData();
  const createResponse = await bookingApi.createBooking(request,bookingData);
  const createBody = await createResponse.json();
  const bookingId = createBody.bookingid;
  const response = await bookingApi.getBooking(request,bookingId);
  expect(response.status()).toBe(200);
  const body = await response.json();
  console.log(body)
  expect(body).toHaveProperty('firstname');
  expect(body).toHaveProperty('lastname');
  expect(body).toHaveProperty('bookingdates');
});