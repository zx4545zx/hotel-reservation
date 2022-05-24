class Room < ApplicationRecord
    has_many :reservation_rooms
    has_many :reservations, through: :reservation_rooms
end
