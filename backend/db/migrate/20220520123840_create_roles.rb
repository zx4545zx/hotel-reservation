class CreateRoles < ActiveRecord::Migration[7.0]
  def change
    create_table :roles do |t|
      t.references :department, null: true, foreign_key: true
      t.references :position, null: true, foreign_key: true
      t.boolean :acess_reserv
      t.boolean :acess_quot
      t.boolean :acess_cust
      t.boolean :acess_meet
      t.boolean :acess_meet_equi
      t.boolean :acess_meet_ser
      t.boolean :acess_room
      t.boolean :acess_room_type
      t.boolean :acess_bed_type
      t.boolean :acess_room_equi
      t.boolean :acess_room_ser
      t.boolean :acess_room_add_on_ser
      t.boolean :package
      t.boolean :staff

      t.timestamps
    end
  end
end
