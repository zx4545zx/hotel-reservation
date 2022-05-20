class Role < ApplicationRecord
  belongs_to :department
  belongs_to :position

  has_one :staff
end
