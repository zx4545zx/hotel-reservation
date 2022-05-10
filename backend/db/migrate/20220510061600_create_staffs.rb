class CreateStaffs < ActiveRecord::Migration[7.0]
  def change
    create_table :staffs do |t|
      t.string :first_name, null:false
      t.string :last_name, null: false
      t.string :phone_number, null: false
      t.string :email, null: false
      t.string :password, null: false
      t.string :status, null: false, default: "offline"

      t.timestamps
    end
  end
end
