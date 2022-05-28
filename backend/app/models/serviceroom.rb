class Serviceroom < ApplicationRecord
    has_many :list_room_services, dependent: :destroy
    has_many :rooms, :through => :list_room_services
end
