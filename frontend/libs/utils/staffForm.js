export const staffForm = (data) => {
  return {
    first_name: data.first_name,
    last_name: data.last_name,
    phone_number: data.phone_number,
    email: data.email,
    password: data.password,
    role_attributes: {
      department_id: data.department_id,
      position_id: data.position_id,
      acess_reserv: data.acess_reserv,
      acess_quot: data.acess_quot,
      acess_cust: data.acess_cust,
      acess_meet: data.acess_meet,
      acess_meet_equi: data.acess_meet_equi,
      acess_meet_ser: data.acess_meet_ser,
      acess_room: data.acess_room,
      acess_room_type: data.acess_room_type,
      acess_bed_type: data.acess_bed_type,
      acess_room_equi: data.acess_room_equi,
      acess_room_ser: data.acess_room_ser,
      acess_room_add_on_ser: data.acess_room_add_on_ser,
      acess_package: data.acess_package,
      acess_staff: data.acess_staff,
    },
  };
};
