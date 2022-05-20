class AddRoleToStaffs < ActiveRecord::Migration[7.0]
  def change
    add_reference :staffs, :role, null: false, foreign_key: true
  end
end
