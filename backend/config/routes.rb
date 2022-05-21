Rails.application.routes.draw do
  resources :list_package_equipments
  resources :list_package_services
  resources :list_package_rooms
  resources :list_package_meetingrooms
  resources :packages
  resources :services
  resources :equipment
  resources :meeting_rooms

  resources :positions
  resources :departments
  resources :staffs
  resources :roles

  resources :roomtypes
  resources :bedtypes
  resources :rooms
  resources :servicerooms
  resources :addonservicerooms
  resources :equipmentsrooms

  resources :reservations

  post '/staffs/login', to: 'staffs#login'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
