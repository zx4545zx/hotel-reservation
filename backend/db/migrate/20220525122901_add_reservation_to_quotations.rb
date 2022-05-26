class AddReservationToQuotations < ActiveRecord::Migration[7.0]
  def change
    add_reference :quotations, :reservation, null: false, foreign_key: true
  end
end
