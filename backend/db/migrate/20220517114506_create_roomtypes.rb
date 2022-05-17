class CreateRoomtypes < ActiveRecord::Migration[7.0]
  def change
    create_table :roomtypes do |t|
      t.string :name

      t.timestamps
    end
  end
end
