Rails.application.routes.draw do
  resources :positions
  resources :departments

  resources :staffs
  resources :roomtypes
  resources :bedtypes
  resources :rooms
  resources :servicerooms
  resources :addonservicerooms
  resources :equipmentsrooms
  post '/staffs/login', to: 'staffs#login'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
