class Department < ApplicationRecord
    belongs_to :staff
    has_many :positions
end
