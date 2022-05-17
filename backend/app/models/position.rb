class Position < ApplicationRecord
  has_many :staffs, dependent: :nullify
  has_many :departments, through: :staffs
end
