class ListPackageEquipment < ApplicationRecord
  belongs_to :packages
  belongs_to :equipment
end
