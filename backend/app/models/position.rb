class Position < ApplicationRecord
    has_many :roles, dependent: :nullify
    has_many :departments, through: :roles, dependent: :nullify
end
