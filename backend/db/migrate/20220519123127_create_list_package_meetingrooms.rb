class CreateListPackageMeetingrooms < ActiveRecord::Migration[7.0]
  def change
    create_table :list_package_meetingrooms do |t|
      t.references :package, null: false, foreign_key: true
      t.references :meeting_room, null: false, foreign_key: true

      t.timestamps
    end
  end
end
