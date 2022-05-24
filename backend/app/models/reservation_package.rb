class ReservationPackage < ApplicationRecord
  belongs_to :reservation
  belongs_to :package
end
