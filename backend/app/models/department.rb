class Department < ApplicationRecord
    has_many :roles
    has_many :positions, through: :roles
end
