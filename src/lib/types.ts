import { Collection, ObjectId } from "mongodb";

export interface Viewer {
  _id?: string;
  token?: string;
  avatar?: string;
  walletId?: string;
  didRequest: boolean;
}

export interface BookingsIndex {
  [key: string]: BookingsIndexYear;
}

export interface BookingsIndexYear {
  [key: string]: BookingsIndexMonth;
}

export interface BookingsIndexMonth {
  [key: string]: boolean;
}

export enum ListingType {
  Apartment = "APARTMENT",
  House = "HOUSE",
}

export interface Booking {
  _id: ObjectId;
  listing: ObjectId; // ONE Booking have a ONE Listing is being booked
  tenant: string; // ONE Booking have a ONE User have booked it
  checkIn: string;
  checkOut: string;
}

export interface Listing {
  _id: ObjectId;
  title: string;
  description: string;
  image: string;
  host: string; // ONE Listing have a ONE host User
  type: ListingType;
  address: string;
  country: string;
  admin: string;
  city: string;
  bookings: ObjectId[]; // ONE Listing can have MANY Bookings
  bookingsIndex: BookingsIndex;
  price: number;
  numOfGuests: number;
  authorized?: boolean;
}

export interface User {
  _id: string;
  token: string;
  name: string;
  avatar: string;
  contact: string;
  walletId?: string;
  income: number;
  bookings: ObjectId[]; // ONE User can have MANY Booking
  listings: ObjectId[]; // ONE User can have MANY Listing
  authorized?: boolean;
}

export interface Database {
  bookings: Collection<Booking>;
  listings: Collection<Listing>;
  users: Collection<User>;
}
