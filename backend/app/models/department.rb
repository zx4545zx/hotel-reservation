class Department < ApplicationRecord
  has_many :staffs
  has_many :positions, through: :staffs
end
