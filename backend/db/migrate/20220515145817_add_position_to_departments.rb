class AddPositionToDepartments < ActiveRecord::Migration[7.0]
  def change
    add_reference :departments, :position, null: true, foreign_key: true
  end
end
