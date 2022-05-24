class CreateReservationAddonservicerooms < ActiveRecord::Migration[7.0]
  def change
    create_table :reservation_addonservicerooms do |t|
      t.references :reservation, null: true, foreign_key: true
      t.references :addonserviceroom, null: true, foreign_key: true

      t.timestamps
    end
  end
end
