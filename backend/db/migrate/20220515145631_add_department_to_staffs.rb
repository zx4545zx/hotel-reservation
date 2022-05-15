class AddDepartmentToStaffs < ActiveRecord::Migration[7.0]
  def change
    add_reference :staffs, :department, null: true, foreign_key: true
  end
end
