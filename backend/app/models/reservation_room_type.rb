class ReservationRoomType < ApplicationRecord
  belongs_to :reservation
  belongs_to :roomtype
end
