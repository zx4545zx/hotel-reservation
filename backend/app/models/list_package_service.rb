class ListPackageService < ApplicationRecord
  belongs_to :packages
  belongs_to :services
end
