# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
if Position.create!(name: 'admin')
    put 'position created'
end

if Department.create!(name: 'admin')
    put 'department created'
end

if Role.create!(department_id: 1 , position: 1)
    put 'role created'
end

if Staff.create!(first_name: 'admin', last_name: 'admin', phone_number: '0949589304', email:'admin@mail.com',password:'1234', role_id: 1)
    put 'staff created'
end