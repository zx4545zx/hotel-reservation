class Position < ApplicationRecord
    belongs_to :department, optional: true
end
