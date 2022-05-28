class Roomtype < ApplicationRecord
    has_many :list_package_rooms
    has_many :packages, through: :list_package_rooms

    has_many :reservation_room_types
    has_many :reservations, through: :reservation_room_types

    has_many :rooms
end
