class Quotation < ApplicationRecord
    belongs_to :reservation

    enum status: {
        approved: 'approved',
        pending: 'pending',
        cancelled: 'cancelled',
    }

    after_save :set_confirmed_status, if: Proc.new { |q| q.approved? }
    after_save :set_pending_status, if: Proc.new { |q| q.pending? }

    private
        def set_confirmed_status
            cancel_quotations
            reservation.confirmed!
        end

        def set_pending_status
            cancel_quotations
            reservation.pending!
        end

        def cancel_quotations
            r = reservation.quotations.select{ |q| q.id != self.id}
            r.each do |q|
                q.status = 'cancelled'
                q.save
            end
        end
end
