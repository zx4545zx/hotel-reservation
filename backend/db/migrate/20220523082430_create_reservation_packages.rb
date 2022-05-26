class CreateReservationPackages < ActiveRecord::Migration[7.0]
  def change
    create_table :reservation_packages do |t|
      t.references :reservation, null: true, foreign_key: true
      t.references :package, null: true, foreign_key: true

      t.timestamps
    end
  end
end
