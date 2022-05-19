class CreateListPackageRooms < ActiveRecord::Migration[7.0]
  def change
    create_table :list_package_rooms do |t|
      t.references :packages, null: false, foreign_key: true
      t.references :roomtypes, null: false, foreign_key: true
      t.integer :value

      t.timestamps
    end
  end
end
