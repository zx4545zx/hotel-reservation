Rails.application.routes.draw do
  resources :list_room_services
  resources :list_room_equipments
  resources :list_package_equipments
  resources :list_package_services
  resources :list_package_rooms
  resources :list_package_meetingrooms
  resources :packages

  resources :meeting_rooms
  resources :services
  resources :equipments

  resources :positions
  resources :departments
  resources :staffs
  resources :roles

  resources :rooms
  resources :roomtypes
  resources :bedtypes
  resources :servicerooms
  resources :addonservicerooms
  resources :equipmentsrooms

  resources :reservations
  resources :reservation_meeting_rooms
  resources :reservation_services
  resources :reservation_equipments

  resources :customers

  post '/staffs/login', to: 'staffs#login'
  post '/customers/login', to: 'customers#login'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
