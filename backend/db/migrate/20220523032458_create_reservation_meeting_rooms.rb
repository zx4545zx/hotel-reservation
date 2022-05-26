class CreateReservationMeetingRooms < ActiveRecord::Migration[7.0]
  def change
    create_table :reservation_meeting_rooms do |t|
      t.references :reservation, null: true, foreign_key: true
      t.references :meeting_room, null: true, foreign_key: true
      t.integer :amount, null: false

      t.timestamps
    end
  end
end
