class Quotation < ApplicationRecord
    belongs_to :reservation

    enum status: {
        approved: 'approved',
        pending: 'pending',
        cancelled: 'cancelled',
    }
end
