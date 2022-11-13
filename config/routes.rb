Rails.application.routes.draw do
  resources :users
  root 'users#index'  
  get '/users/:id/edit', to: 'users#edit'
  get 'new', to:'users#new'
end
