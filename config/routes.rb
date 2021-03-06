Rails.application.routes.draw do
  root to: 'home#index'

  namespace :api do
    namespace :v1 do
      resources :products, only: [:index]
      resources :departments, only: [:index]
    end
  end
end
