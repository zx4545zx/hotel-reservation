class Roomtype < ApplicationRecord
    has_many :list_package_rooms, dependent: :destroy
end
