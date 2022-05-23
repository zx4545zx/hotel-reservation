class CreateReservationServices < ActiveRecord::Migration[7.0]
  def change
    create_table :reservation_services do |t|
      t.references :reservation, null: true, foreign_key: true
      t.references :service, null: true, foreign_key: true
      t.integer :amount, null: false

      t.timestamps
    end
  end
end
