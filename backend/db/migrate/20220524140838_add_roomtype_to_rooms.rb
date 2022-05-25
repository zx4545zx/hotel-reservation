class AddRoomtypeToRooms < ActiveRecord::Migration[7.0]
  def change
    add_reference :rooms, :roomtype, null: false, foreign_key: true
  end
end
