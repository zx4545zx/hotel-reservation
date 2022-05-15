Rails.application.routes.draw do
  resources :positions
  resources :departments

  resources :staffs
  post '/staffs/login', to: 'staffs#login'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
