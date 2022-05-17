class Department < ApplicationRecord
  has_many :staffs, dependent: :nullify
  has_many :positions, through: :staffs
end
