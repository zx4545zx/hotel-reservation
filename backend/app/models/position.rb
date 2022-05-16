class Position < ApplicationRecord
  has_many :staffs
  has_many :departments, through: :staffs
end
