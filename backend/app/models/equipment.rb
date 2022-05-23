class Equipment < ApplicationRecord
    has_many :list_package_equipments
    has_many :packages, through: :list_package_equipments

    has_many :reservation_quuipments
    has_many :reservations, through: :reservation_quuipments
end
