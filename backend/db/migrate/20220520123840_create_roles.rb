class CreateRoles < ActiveRecord::Migration[7.0]
  def change
    create_table :roles do |t|
      t.references :department, null: true, foreign_key: true
      t.references :position, null: true, foreign_key: true
      t.boolean :acess_reserv, default: false
      t.boolean :acess_quot, default: false
      t.boolean :acess_cust, default: false
      t.boolean :acess_meet, default: false
      t.boolean :acess_meet_equi, default: false
      t.boolean :acess_meet_ser, default: false
      t.boolean :acess_room, default: false
      t.boolean :acess_room_type, default: false
      t.boolean :acess_bed_type, default: false
      t.boolean :acess_room_equi, default: false
      t.boolean :acess_room_ser, default: false
      t.boolean :acess_room_add_on_ser, default: false
      t.boolean :acess_package, default: false
      t.boolean :acess_staff, default: false

      t.timestamps
    end
  end
end
