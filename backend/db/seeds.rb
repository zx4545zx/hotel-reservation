# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Position.create!(name: 'admin')
Department.create!(name: 'admin')
Staff.create!(first_name: 'admin', last_name: 'admin', phone_number: '0949589304', email:'admin@mail.com',password:'1234',department_id: 1,position_id:1)