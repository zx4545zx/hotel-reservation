class MeetingRoom < ApplicationRecord
    has_many :list_package_meetingrooms, dependent: :destroy
    
    enum status: {
        empty: 'empty',
        booking: 'booking',
        reserved: 'reserved',
    }
end
