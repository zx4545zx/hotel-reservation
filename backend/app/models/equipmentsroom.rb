class Equipmentsroom < ApplicationRecord
    has_many :list_room_equipments, dependent: :destroy
end
