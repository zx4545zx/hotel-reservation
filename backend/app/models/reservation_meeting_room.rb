class ReservationMeetingRoom < ApplicationRecord
  belongs_to :reservation
  belongs_to :meeting_room
end
