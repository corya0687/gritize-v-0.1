Rails.application.routes.draw do
  resources :routine_tags
  resources :tags
  resources :routines
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'application#home'
end
