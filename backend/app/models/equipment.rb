class Equipment < ApplicationRecord
    has_many :list_package_equipments, dependent: :destroy
end
