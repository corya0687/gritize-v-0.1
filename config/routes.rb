Rails.application.routes.draw do
  devise_for :users, :path => 'accounts'
  resources :tags
  resources :users do
    resources :routines

  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'application#home'
end
