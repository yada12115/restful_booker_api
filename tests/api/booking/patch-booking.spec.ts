import { test, expect } from '../../../fixtures/api-fixture';
import { createBookingData } from '../../../data/booking-data';

test('Partial update booking', async ({request, bookingApi }) => {

  const bookingData = createBookingData();
  const createResponse = await bookingApi.createBooking(request,bookingData);
  expect(createResponse.status()).toBe(200);
  const createBody = await createResponse.json();
  const bookingId = createBody.bookingid;
  // PATCH
  const patchResponse =
    await bookingApi.patchBooking(request,
      bookingId,
      {
        firstname: 'raju'
      }
    );
  expect(patchResponse.status()).toBe(200);
  const patchBody = await patchResponse.json();
  expect(patchBody.firstname).toBe('raju');
});