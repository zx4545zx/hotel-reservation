class Staff < ApplicationRecord
    belongs_to :role

    has_many :reservations

    has_one :department, through: :role, dependent: :nullify
    has_one :position, through: :role, dependent: :nullify

    accepts_nested_attributes_for :role
end
