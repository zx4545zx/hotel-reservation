class Department < ApplicationRecord
    belongs_to :staff, optional: true
    has_many :positions
end
