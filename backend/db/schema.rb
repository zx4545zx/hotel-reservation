# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_05_25_122901) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addonservicerooms", force: :cascade do |t|
    t.string "name"
    t.decimal "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "bedtypes", force: :cascade do |t|
    t.string "name"
    t.string "size"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "customers", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "phone_number"
    t.string "email"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "departments", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "equipment", force: :cascade do |t|
    t.string "name", null: false
    t.decimal "price", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "equipmentsrooms", force: :cascade do |t|
    t.string "name"
    t.decimal "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "list_package_equipments", force: :cascade do |t|
    t.bigint "package_id", null: false
    t.bigint "equipment_id", null: false
    t.integer "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["equipment_id"], name: "index_list_package_equipments_on_equipment_id"
    t.index ["package_id"], name: "index_list_package_equipments_on_package_id"
  end

  create_table "list_package_meetingrooms", force: :cascade do |t|
    t.bigint "package_id", null: false
    t.bigint "meeting_room_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["meeting_room_id"], name: "index_list_package_meetingrooms_on_meeting_room_id"
    t.index ["package_id"], name: "index_list_package_meetingrooms_on_package_id"
  end

  create_table "list_package_rooms", force: :cascade do |t|
    t.bigint "package_id", null: false
    t.bigint "roomtype_id", null: false
    t.integer "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["package_id"], name: "index_list_package_rooms_on_package_id"
    t.index ["roomtype_id"], name: "index_list_package_rooms_on_roomtype_id"
  end

  create_table "list_package_services", force: :cascade do |t|
    t.bigint "package_id", null: false
    t.bigint "service_id", null: false
    t.integer "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["package_id"], name: "index_list_package_services_on_package_id"
    t.index ["service_id"], name: "index_list_package_services_on_service_id"
  end

  create_table "list_room_equipments", force: :cascade do |t|
    t.bigint "room_id", null: false
    t.bigint "equipmentsroom_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["equipmentsroom_id"], name: "index_list_room_equipments_on_equipmentsroom_id"
    t.index ["room_id"], name: "index_list_room_equipments_on_room_id"
  end

  create_table "list_room_services", force: :cascade do |t|
    t.bigint "room_id", null: false
    t.bigint "serviceroom_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["room_id"], name: "index_list_room_services_on_room_id"
    t.index ["serviceroom_id"], name: "index_list_room_services_on_serviceroom_id"
  end

  create_table "meeting_rooms", force: :cascade do |t|
    t.string "name", null: false
    t.decimal "price", null: false
    t.integer "people", null: false
    t.integer "table", null: false
    t.string "status", default: "empty", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "packages", force: :cascade do |t|
    t.string "name"
    t.integer "days"
    t.date "start"
    t.date "stop"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.decimal "price"
    t.decimal "dis_price"
  end

  create_table "positions", force: :cascade do |t|
    t.string "name"
    t.boolean "head", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "quotations", force: :cascade do |t|
    t.integer "butget"
    t.string "status", default: "pending"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "reservation_id", null: false
    t.index ["reservation_id"], name: "index_quotations_on_reservation_id"
  end

  create_table "reservation_addonservicerooms", force: :cascade do |t|
    t.bigint "reservation_id"
    t.bigint "addonserviceroom_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["addonserviceroom_id"], name: "index_reservation_addonservicerooms_on_addonserviceroom_id"
    t.index ["reservation_id"], name: "index_reservation_addonservicerooms_on_reservation_id"
  end

  create_table "reservation_equipments", force: :cascade do |t|
    t.bigint "reservation_id"
    t.bigint "equipment_id"
    t.integer "amount", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["equipment_id"], name: "index_reservation_equipments_on_equipment_id"
    t.index ["reservation_id"], name: "index_reservation_equipments_on_reservation_id"
  end

  create_table "reservation_meeting_rooms", force: :cascade do |t|
    t.bigint "reservation_id"
    t.bigint "meeting_room_id"
    t.integer "amount", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["meeting_room_id"], name: "index_reservation_meeting_rooms_on_meeting_room_id"
    t.index ["reservation_id"], name: "index_reservation_meeting_rooms_on_reservation_id"
  end

  create_table "reservation_packages", force: :cascade do |t|
    t.bigint "reservation_id"
    t.bigint "package_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["package_id"], name: "index_reservation_packages_on_package_id"
    t.index ["reservation_id"], name: "index_reservation_packages_on_reservation_id"
  end

  create_table "reservation_room_types", force: :cascade do |t|
    t.bigint "reservation_id"
    t.bigint "roomtype_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["reservation_id"], name: "index_reservation_room_types_on_reservation_id"
    t.index ["roomtype_id"], name: "index_reservation_room_types_on_roomtype_id"
  end

  create_table "reservation_rooms", force: :cascade do |t|
    t.bigint "reservation_id"
    t.bigint "room_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["reservation_id"], name: "index_reservation_rooms_on_reservation_id"
    t.index ["room_id"], name: "index_reservation_rooms_on_room_id"
  end

  create_table "reservation_services", force: :cascade do |t|
    t.bigint "reservation_id"
    t.bigint "service_id"
    t.integer "amount", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["reservation_id"], name: "index_reservation_services_on_reservation_id"
    t.index ["service_id"], name: "index_reservation_services_on_service_id"
  end

  create_table "reservations", force: :cascade do |t|
    t.integer "guest", null: false
    t.string "check_in", null: false
    t.string "check_out", null: false
    t.decimal "price", null: false
    t.string "tracking", null: false
    t.integer "queue", null: false
    t.integer "butget", null: false
    t.string "status", default: "pending", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "staff_id"
    t.bigint "customer_id"
    t.index ["customer_id"], name: "index_reservations_on_customer_id"
    t.index ["staff_id"], name: "index_reservations_on_staff_id"
  end

  create_table "roles", force: :cascade do |t|
    t.bigint "department_id"
    t.bigint "position_id"
    t.boolean "acess_reserv", default: false
    t.boolean "acess_quot", default: false
    t.boolean "acess_cust", default: false
    t.boolean "acess_meet", default: false
    t.boolean "acess_meet_equi", default: false
    t.boolean "acess_meet_ser", default: false
    t.boolean "acess_room", default: false
    t.boolean "acess_room_type", default: false
    t.boolean "acess_bed_type", default: false
    t.boolean "acess_room_equi", default: false
    t.boolean "acess_room_ser", default: false
    t.boolean "acess_room_add_on_ser", default: false
    t.boolean "acess_package", default: false
    t.boolean "acess_staff", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["department_id"], name: "index_roles_on_department_id"
    t.index ["position_id"], name: "index_roles_on_position_id"
  end

  create_table "rooms", force: :cascade do |t|
    t.string "name"
    t.string "building"
    t.integer "guest"
    t.decimal "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "roomtype_id", null: false
    t.bigint "bedtype_id", null: false
    t.index ["bedtype_id"], name: "index_rooms_on_bedtype_id"
    t.index ["roomtype_id"], name: "index_rooms_on_roomtype_id"
  end

  create_table "roomtypes", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "servicerooms", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "services", force: :cascade do |t|
    t.string "name", null: false
    t.decimal "price", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "staffs", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "phone_number", null: false
    t.string "email", null: false
    t.string "password", null: false
    t.string "status", default: "offline", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "staff_id"
    t.bigint "role_id", null: false
    t.bigint "department_id"
    t.bigint "position_id"
    t.index ["department_id"], name: "index_staffs_on_department_id"
    t.index ["position_id"], name: "index_staffs_on_position_id"
    t.index ["role_id"], name: "index_staffs_on_role_id"
    t.index ["staff_id"], name: "index_staffs_on_staff_id"
  end

  add_foreign_key "list_package_equipments", "equipment"

  add_foreign_key "list_package_equipments", "packages", column: "packages_id"
  add_foreign_key "list_package_meetingrooms", "meeting_rooms", column: "meeting_rooms_id"
  add_foreign_key "list_package_meetingrooms", "packages", column: "packages_id"
  add_foreign_key "list_package_rooms", "packages", column: "packages_id"
  add_foreign_key "list_package_rooms", "roomtypes", column: "roomtypes_id"
  add_foreign_key "list_package_services", "packages", column: "packages_id"
  add_foreign_key "list_package_services", "services", column: "services_id"
  add_foreign_key "list_room_equipments", "equipmentsrooms"
  add_foreign_key "list_room_equipments", "rooms"
  add_foreign_key "list_room_services", "rooms"
  add_foreign_key "list_room_services", "servicerooms"

  add_foreign_key "list_package_equipments", "packages"
  add_foreign_key "list_package_meetingrooms", "meeting_rooms"
  add_foreign_key "list_package_meetingrooms", "packages"
  add_foreign_key "list_package_rooms", "packages"
  add_foreign_key "list_package_rooms", "roomtypes"
  add_foreign_key "list_package_services", "packages"
  add_foreign_key "list_package_services", "services"
  add_foreign_key "list_room_equipments", "equipmentsrooms"
  add_foreign_key "list_room_equipments", "rooms"
  add_foreign_key "list_room_services", "rooms"
  add_foreign_key "list_room_services", "servicerooms"
  add_foreign_key "quotations", "reservations"
  add_foreign_key "reservation_addonservicerooms", "addonservicerooms"
  add_foreign_key "reservation_addonservicerooms", "reservations"
  add_foreign_key "reservation_equipments", "equipment"
  add_foreign_key "reservation_equipments", "reservations"
  add_foreign_key "reservation_meeting_rooms", "meeting_rooms"
  add_foreign_key "reservation_meeting_rooms", "reservations"
  add_foreign_key "reservation_packages", "packages"
  add_foreign_key "reservation_packages", "reservations"
  add_foreign_key "reservation_room_types", "reservations"
  add_foreign_key "reservation_room_types", "roomtypes"
  add_foreign_key "reservation_rooms", "reservations"
  add_foreign_key "reservation_rooms", "rooms"
  add_foreign_key "reservation_services", "reservations"
  add_foreign_key "reservation_services", "services"
  add_foreign_key "reservations", "customers"
  add_foreign_key "reservations", "staffs"

  add_foreign_key "roles", "departments"
  add_foreign_key "roles", "positions"
  add_foreign_key "rooms", "bedtypes"
  add_foreign_key "rooms", "roomtypes"
  add_foreign_key "staffs", "roles"
  add_foreign_key "staffs", "staffs"
end
