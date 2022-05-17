class CreateRooms < ActiveRecord::Migration[7.0]
  def change
    create_table :rooms do |t|
      t.string :name
      t.string :building
      t.integer :guest
      t.decimal :price

      t.timestamps
    end
  end
end
