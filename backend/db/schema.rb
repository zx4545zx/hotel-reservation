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

ActiveRecord::Schema[7.0].define(version: 2022_05_19_133724) do
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
    t.decimal "size"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "departments", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "equipment", force: :cascade do |t|
    t.string "name"
    t.decimal "price"
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
    t.bigint "packages_id", null: false
    t.bigint "equipment_id", null: false
    t.integer "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["equipment_id"], name: "index_list_package_equipments_on_equipment_id"
    t.index ["packages_id"], name: "index_list_package_equipments_on_packages_id"
  end

  create_table "list_package_meetingrooms", force: :cascade do |t|
    t.bigint "packages_id", null: false
    t.bigint "meeting_rooms_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["meeting_rooms_id"], name: "index_list_package_meetingrooms_on_meeting_rooms_id"
    t.index ["packages_id"], name: "index_list_package_meetingrooms_on_packages_id"
  end

  create_table "list_package_rooms", force: :cascade do |t|
    t.bigint "packages_id", null: false
    t.bigint "roomtypes_id", null: false
    t.integer "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["packages_id"], name: "index_list_package_rooms_on_packages_id"
    t.index ["roomtypes_id"], name: "index_list_package_rooms_on_roomtypes_id"
  end

  create_table "list_package_services", force: :cascade do |t|
    t.bigint "packages_id", null: false
    t.bigint "services_id", null: false
    t.integer "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["packages_id"], name: "index_list_package_services_on_packages_id"
    t.index ["services_id"], name: "index_list_package_services_on_services_id"
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
  end

  create_table "positions", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "rooms", force: :cascade do |t|
    t.string "name"
    t.string "building"
    t.integer "guest"
    t.decimal "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
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
    t.string "name"
    t.decimal "price"
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
    t.bigint "department_id"
    t.bigint "position_id"
    t.index ["department_id"], name: "index_staffs_on_department_id"
    t.index ["position_id"], name: "index_staffs_on_position_id"
  end

  add_foreign_key "list_package_equipments", "equipment"
  add_foreign_key "list_package_equipments", "packages", column: "packages_id"
  add_foreign_key "list_package_meetingrooms", "meeting_rooms", column: "meeting_rooms_id"
  add_foreign_key "list_package_meetingrooms", "packages", column: "packages_id"
  add_foreign_key "list_package_rooms", "packages", column: "packages_id"
  add_foreign_key "list_package_rooms", "roomtypes", column: "roomtypes_id"
  add_foreign_key "list_package_services", "packages", column: "packages_id"
  add_foreign_key "list_package_services", "services", column: "services_id"
  add_foreign_key "staffs", "departments"
  add_foreign_key "staffs", "positions"
end
