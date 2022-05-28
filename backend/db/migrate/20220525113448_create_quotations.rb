class CreateQuotations < ActiveRecord::Migration[7.0]
  def change
    create_table :quotations do |t|
      t.integer :butget
      t.string :status, default: 'pending'

      t.timestamps
    end
  end
end
