class ListPackageEquipment < ApplicationRecord
  belongs_to :package
  belongs_to :equipment
end
