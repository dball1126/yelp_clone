Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

    namespace :api, defaults: {format: 'json'} do
      resources :users, only: [:new, :create]
      resources :reviews
      get 'businesses/search', to: 'searches#business_search'
      resources :businesses, only: [:index, :show, :create, :destroy]
      resource :session, only: [:new, :create, :destroy]
    end
end
