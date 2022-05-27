class CreateListRoomServices < ActiveRecord::Migration[7.0]
  def change
    create_table :list_room_services do |t|
      t.references :room, null: false, foreign_key: true
      t.references :serviceroom, null: false, foreign_key: true

      t.timestamps
    end
  end
end
