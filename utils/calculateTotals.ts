import { calculateDaysBetween } from "./calendar";

type BookingDetails = {
  checkIn: Date;
  checkOut: Date;
  price: number;
};

export const calculateTotals = ({
  checkIn,
  checkOut,
  price,
}: BookingDetails) => {
  const totalNights = calculateDaysBetween({ checkIn, checkOut });

  const subTotal = totalNights * price;

  const cleaning = 399;
  const service = 599;
  const tax = subTotal * 0.1;
  const orderTotal = subTotal + cleaning + service + tax;

  return { totalNights, subTotal, cleaning, service, tax, orderTotal };
};
