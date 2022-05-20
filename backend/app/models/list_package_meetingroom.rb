class ListPackageMeetingroom < ApplicationRecord
  belongs_to :packages
  belongs_to :meeting_rooms
end
