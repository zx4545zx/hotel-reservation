class CreateListRoomEquipments < ActiveRecord::Migration[7.0]
  def change
    create_table :list_room_equipments do |t|
      t.references :room, null: false, foreign_key: true
      t.references :equipmentsroom, null: false, foreign_key: true

      t.timestamps
    end
  end
end
