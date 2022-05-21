class CreateBedtypes < ActiveRecord::Migration[7.0]
  def change
    create_table :bedtypes do |t|
      t.string :name
      t.decimal :size

      t.timestamps
    end
  end
end
