Rails.application.routes.draw do
  resources :tags
  resources :routines
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'application#home'
end
