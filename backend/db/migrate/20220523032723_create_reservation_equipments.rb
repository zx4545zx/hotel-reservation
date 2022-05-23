class CreateReservationEquipments < ActiveRecord::Migration[7.0]
  def change
    create_table :reservation_equipments do |t|
      t.references :reservation, null: true, foreign_key: true
      t.references :equipment, null: true, foreign_key: true

      t.timestamps
    end
  end
end
