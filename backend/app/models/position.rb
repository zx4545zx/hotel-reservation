class Position < ApplicationRecord
    has_many :roles
    has_many :departments, through: :roles
end
