class AddPriceToPackages < ActiveRecord::Migration[7.0]
  def change
    add_column :packages, :price, :decimal
    add_column :packages, :dis_price, :decimal
  end
end
