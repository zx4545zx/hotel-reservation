class Service < ApplicationRecord
    has_many :list_package_services, dependent: :destroy
   
end
