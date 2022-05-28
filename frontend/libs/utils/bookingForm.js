import ShortUniqueId from "short-unique-id";

export const bookingForm = (
  guest,
  checkIn,
  checkOut,
  price,
  butget,
  customer,
  staff,
) => {
  const uid = new ShortUniqueId({ length: 10 });

  return {
    guest: parseInt(guest),
    check_in: checkIn,
    check_out: checkOut,
    price: price,
    tracking: uid(),
    queue: 1,
    butget: butget,
    customer_id: customer.id,
    staff_id: staff.id,
  };
};
