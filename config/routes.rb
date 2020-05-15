Rails.application.routes.draw do
  root to: "router#index"
  get "/*all" => "router#index", :as => :router
end
