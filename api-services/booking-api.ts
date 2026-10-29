import { Booking } from "../models/booking-model"
import { endpoint } from "../data/endpoint"
import { BaseApi } from "../utils/base-api";
import { APIRequestContext } from "@playwright/test";

export class BookingApi extends BaseApi {

    
    
    async getBooking( request:APIRequestContext,bookingId: number) {
        return await this.request.get(endpoint.bookings.getById(bookingId));
    }

    async createBooking(request:APIRequestContext,booking: Booking) {
       return await this.request.post(endpoint.bookings.create, {
        data: booking
       })
    }

    async updateBooking(bookingId: number, booking: Booking) {
        return await this.request.put(endpoint.bookings.update(bookingId), {
            data: booking,
            headers: await this.authHeaders()
        })
    }

    async patchBooking(rquest:APIRequestContext,bookingId: number, booking: Partial<Booking>) {
        return await this.request.patch(endpoint.bookings.patch(bookingId), {
            data: booking,
            headers: await this.authHeaders()
        })
    }

    async deleteBooking(request:APIRequestContext,bookingId: number) {
        return await this.request.delete(endpoint.bookings.delete(bookingId), {
           headers: await this.authHeaders()
        });
    }
}