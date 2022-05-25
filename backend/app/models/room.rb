class Room < ApplicationRecord
    has_many :list_room_services, dependent: :destroy
    has_many :list_room_equipments, dependent: :destroy
end
