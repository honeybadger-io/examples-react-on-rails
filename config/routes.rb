Rails.application.routes.draw do
  root to: "router#index"
  get "/*all" => "router#index", as: :router
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
