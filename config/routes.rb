Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only:[:create, :destroy]
    resources :notebooks, only:[:create, :show, :destoy, :index]
  end

  # sets root page to yeid: /static_pages/root.html.erb
  root to: 'static_pages#root'
end
