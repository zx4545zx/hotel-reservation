class Department < ApplicationRecord
    has_many :roles, dependent: :nullify
    has_many :positions, through: :roles, dependent: :nullify
end
