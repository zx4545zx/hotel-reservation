class MeetingRoom < ApplicationRecord
    enum status: {
        empty: 'empty',
        booking: 'booking',
        reserved: 'reserved',
    }

    has_many :list_package_meetingrooms
    has_many :packages, through: :list_package_meetingrooms
end
