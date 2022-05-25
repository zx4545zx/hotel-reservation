class AddBedtypeToRooms < ActiveRecord::Migration[7.0]
  def change
    add_reference :rooms, :bedtype, null: false, foreign_key: true
  end
end
