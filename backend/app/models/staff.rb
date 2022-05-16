class Staff < ApplicationRecord
  belongs_to :department, optional: true
  belongs_to :position, optional: true
end
