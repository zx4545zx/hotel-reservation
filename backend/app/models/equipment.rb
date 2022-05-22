class Equipment < ApplicationRecord
    has_many :list_package_equipments
    has_many :packages, through: :list_package_equipments
end
