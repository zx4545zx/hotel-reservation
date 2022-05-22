class Package < ApplicationRecord
    has_many :list_package_meetingrooms
    has_many :meeting_rooms, through: :list_package_meetingrooms

    has_many :list_package_rooms
    has_many :roomtypes, through: :list_package_rooms

    has_many :list_package_services
    has_many :services, through: :list_package_services

    has_many :list_package_equipments
    has_many :equipments, through: :list_package_equipments
end
