export const bookingForm = (guest, checkIn, checkOut, price, butget) => {
  return {
    guest: parseInt(guest),
    check_in: checkIn,
    check_out: checkOut,
    price: price,
    tracking: "",
    queue: null,
    butget: butget,
    customer_id: {},
    staff_id: {},
    service_id: {},
    room_id: {},
    roomtype_id: {},
    meeting_room_id: {},
    equipment_id: {},
    addonserviceroom_id: {},
    package_id: {},
  };
};
