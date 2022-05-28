class CreateReservationRooms < ActiveRecord::Migration[7.0]
  def change
    create_table :reservation_rooms do |t|
      t.references :reservation, null: true, foreign_key: true
      t.references :room, null: true, foreign_key: true

      t.timestamps
    end
  end
end
