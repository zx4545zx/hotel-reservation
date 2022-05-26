class Package < ApplicationRecord
    has_many :list_package_equipments, dependent: :destroy
    has_many :list_package_meetingrooms, dependent: :destroy
    has_many :list_package_rooms, dependent: :destroy
    has_many :list_package_services, dependent: :destroy
end
