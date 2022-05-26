class ListPackageMeetingroom < ApplicationRecord
  belongs_to :package
  belongs_to :meeting_room
end
