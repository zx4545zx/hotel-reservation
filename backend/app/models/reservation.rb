class Reservation < ApplicationRecord
    enum status: {
        pending: 'pending',
        confirmed: 'confirmed',
        paid: 'paid',
    }
end
