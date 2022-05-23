class Reservation < ApplicationRecord

    enum status: {
        pending: 'pending',
        confirmed: 'confirmed',
        paid: 'paid',
    }

    has_many :reservation_addonservicerooms
    has_many :addonservicerooms, through: :reservation_addonservicerooms

    has_many :reservation_quuipments
    has_many :quuipments, through: :reservation_quuipments

    has_many :reservation_meeting_rooms
    has_many :meeting_rooms, through: :reservation_meeting_rooms

    has_many :reservation_room_types
    has_many :room_types, through: :reservation_room_types

    has_many :reservation_rooms
    has_many :rooms, through: :reservation_rooms

    has_many :reservation_services
    has_many :services, through: :reservation_services

    has_many :reservation_packages
    has_many :packages, through: :reservation_packages

    after_create :create_quotation
    after_create :create_reservation_meeting_room

    private

        def create_quotation
        end

        def create_reservation_meeting_room
            byebug
            # reservation_meeting_rooms.create!(reservation_id: reservation.id, meeting_room_id: self.meeting_room_id)
        end

end
