Rails.application.routes.draw do
  resources :services
  resources :equipment
  resources :meeting_rooms

  resources :staffs
  post '/staffs/login', to: 'staffs#login'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
