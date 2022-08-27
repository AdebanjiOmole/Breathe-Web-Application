Rails.application.routes.draw do
  get 'products/index'
  get 'products/new'
  get 'products/edit'
  get 'carts/show'
  resources :users, param: :_username
  post '/auth/login', to: 'authentication#login'
  post 'line_items/:id/add' => "line_items#add_quantity", as: "line_item_add"
  post 'line_items/:id/reduce' => "line_items#reduce_quantity", as: "line_item_reduce"
  resources :orders, defaults: { format: :json }
end

