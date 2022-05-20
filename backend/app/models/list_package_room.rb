class ListPackageRoom < ApplicationRecord
  belongs_to :packages
  belongs_to :roomtypes
end
