class Room < ApplicationRecord
    has_many :list_room_services, dependent: :destroy
    has_many :list_room_equipments, dependent: :destroy
    has_many :servicerooms, :through => :list_room_services
    has_many :equipmentsrooms, :through => :list_room_equipments
    

    enum status: {
        empty: 'empty',
        booking: 'booking',
        reserved: 'reserved'
    }
end
