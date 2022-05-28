class CreateReservationRoomTypes < ActiveRecord::Migration[7.0]
  def change
    create_table :reservation_room_types do |t|
      t.references :reservation, null: true, foreign_key: true
      t.references :roomtype, null: true, foreign_key: true
      t.integer :amount, null: false

      t.timestamps
    end
  end
end
