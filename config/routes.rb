Rails.application.routes.draw do
  
  namespace :api do
  resources :routines,only: [:index,:create,:show,:destroy]
  resources :set_stats,only: [:index,:show,:create]
  resources :exercises,only: [:index,:show]
  resources :muscle_groups,only: [:index]
  resources :users, only: [:show, :create]
  resources :sessions
  # Routing logic: fallback requests for React Router.

  post "/signup" , to: "users#create"
  get "/me", to: "users#show"
  post "/login",to: "sessions#create"
  delete "/logout",to: "sessions#destroy"

  end

  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
