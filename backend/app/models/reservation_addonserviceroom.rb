class ReservationAddonserviceroom < ApplicationRecord
  belongs_to :reservation
  belongs_to :addonserviceroom
end
