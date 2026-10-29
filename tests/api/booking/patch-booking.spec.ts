import { test, expect } from '../../../fixtures/api-fixture';
import { createBookingData } from '../../../data/booking-data';

test('Partial update booking', async ({ bookingApi }) => {

  const bookingData = createBookingData();
  const createResponse = await bookingApi.createBooking(bookingData);
  expect(createResponse.status()).toBe(200);
  const createBody = await createResponse.json();
  const bookingId = createBody.bookingid;
  // PATCH
  const patchResponse =
    await bookingApi.patchBooking(
      bookingId,
      {
        firstname: 'UpdatedKishan'
      }
    );
  expect(patchResponse.status()).toBe(200);
  const patchBody = await patchResponse.json();
  expect(patchBody.firstname).toBe('UpdatedKishan');
});