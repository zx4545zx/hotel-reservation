class Roomtype < ApplicationRecord
    has_many :list_package_rooms
    has_many :packages, through: :list_package_rooms
end
