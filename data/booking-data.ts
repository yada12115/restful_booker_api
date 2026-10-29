import { faker } from '@faker-js/faker';
import { Booking } from '../models/booking-model';

export function createBookingData(): Booking {
  return {
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    totalprice: faker.number.int({ min: 100, max: 5000 }),
    depositpaid: faker.datatype.boolean(),
    bookingdates: {
      checkin: '2026-10-01',
      checkout: '2026-10-05'
    },
    additionalneeds: faker.helpers.arrayElement([
      'Breakfast',
      'Lunch',
      'Dinner'
    ])
  };
}