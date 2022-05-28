class CreatePackages < ActiveRecord::Migration[7.0]
  def change
    create_table :packages do |t|
      t.string :name, null: false
      t.integer :days, null: false
      t.decimal :price, null: false
      t.decimal :dis_price, null: false
      t.date :start, null: false
      t.date :stop, null: false

      t.timestamps
    end
  end
end
