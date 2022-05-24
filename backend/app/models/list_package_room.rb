class ListPackageRoom < ApplicationRecord
  belongs_to :package
  belongs_to :roomtype
end
