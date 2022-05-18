class CreateServicerooms < ActiveRecord::Migration[7.0]
  def change
    create_table :servicerooms do |t|
      t.string :name

      t.timestamps
    end
  end
end
