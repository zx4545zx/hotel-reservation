class Serviceroom < ApplicationRecord
    has_many :list_room_services, dependent: :destroy
end
