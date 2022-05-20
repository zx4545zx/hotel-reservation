class CreateListPackageMeetingrooms < ActiveRecord::Migration[7.0]
  def change
    create_table :list_package_meetingrooms do |t|
      t.references :packages, null: false, foreign_key: true
      t.references :meeting_rooms, null: false, foreign_key: true

      t.timestamps
    end
  end
end
