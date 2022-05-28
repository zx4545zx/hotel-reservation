class Equipmentsroom < ApplicationRecord
    has_many :list_room_equipments, dependent: :destroy
    has_many :rooms, through: :list_room_equipments
end
