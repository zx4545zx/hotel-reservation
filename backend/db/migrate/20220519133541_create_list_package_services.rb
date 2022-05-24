class CreateListPackageServices < ActiveRecord::Migration[7.0]
  def change
    create_table :list_package_services do |t|
      t.references :package, null: false, foreign_key: true
      t.references :service, null: false, foreign_key: true
      t.integer :value

      t.timestamps
    end
  end
end
