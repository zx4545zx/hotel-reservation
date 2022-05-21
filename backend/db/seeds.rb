# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Position.create!(name: 'admin', head: true)
Department.create!(name: 'admin')
Role.create!(department_id: 1,position_id:1,
    "acess_reserv": false,
    "acess_quot": true,
    "acess_cust": true,
    "acess_meet": true,
    "acess_meet_equi": true,
    "acess_meet_ser": true,
    "acess_room": true,
    "acess_room_type": true,
    "acess_bed_type": true,
    "acess_room_equi": true,
    "acess_room_ser": true,
    "acess_room_add_on_ser": true,
    "acess_package": true,
    "acess_staff": true,
)
Staff.create!(first_name: 'admin', last_name: 'admin', phone_number: '0949589304', email:'admin@mail.com',password:'1234',role_id: 1)