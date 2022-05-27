class Room < ApplicationRecord
    belongs_to :roomtype
    belongs_to :bedtype

    has_many :list_room_services, dependent: :destroy
    has_many :list_room_equipments, dependent: :destroy
    has_many :servicerooms, :through => :list_room_services
    has_many :equipmentsrooms, :through => :list_room_equipments
    
    has_many :reservation_rooms
    has_many :reservations, through: :reservation_rooms

    enum status: {
        empty: 'empty',
        booking: 'booking',
        reserved: 'reserved'
    }
end
