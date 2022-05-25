class ListRoomEquipment < ApplicationRecord
  belongs_to :room
  belongs_to :equipmentsroom
end
