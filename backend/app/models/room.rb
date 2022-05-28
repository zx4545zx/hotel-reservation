class Room < ApplicationRecord
    belongs_to :roomtype
    belongs_to :bedtype

    has_many :list_room_services, dependent: :destroy
    has_many :list_room_equipments, dependent: :destroy

    has_many :reservation_rooms
    has_many :reservations, through: :reservation_rooms
end
