Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  resources :users, only:[:index, :show]
  resources :events, only:[:index, :show]
  resources :reviews
end
