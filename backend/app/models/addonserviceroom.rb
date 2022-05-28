class Addonserviceroom < ApplicationRecord
    has_many :reservation_addonservicerooms
    has_many :reservations, through: :reservation_addonservicerooms
end
