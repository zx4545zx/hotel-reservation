class Service < ApplicationRecord
    has_many :list_package_services
    has_many :packages, through: :list_package_services
end
