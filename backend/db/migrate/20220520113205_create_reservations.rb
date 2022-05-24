class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.integer :guest, null: false
      t.string :check_in, null: false
      t.string :check_out, null: false
      t.decimal :price, null: false
      t.string :tracking, null: false
      t.integer :queue, null: false
      t.string :status, null: false, default: 'pending'

      t.timestamps
    end
  end
end
