class CreateMeetingRooms < ActiveRecord::Migration[7.0]
  def change
    create_table :meeting_rooms do |t|
      t.string :name, null: false
      t.decimal :price, null: false
      t.integer :people, null: false
      t.integer :table, null: false
      t.string :status , null: false, default: "empty"

      t.timestamps
    end
  end
end
