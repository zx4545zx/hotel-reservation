class MeetingRoom < ApplicationRecord

    enum status: {
        empty: 'empty',
        booking: 'booking',
        reserved: 'reserved',
    }
end
