Sample::Application.routes.draw do

  get "adminclosedtickets/show"

 match "adminclosedtickets/view/:id"  => "adminclosedtickets#view"

  match "adminclosedtickets/assign/:id" => "adminclosedtickets#assign"

match "adminclosedtickets/support/:id" => "adminclosedtickets#support"

  match "contacts/accinfo" => "contacts#accinfo"
  match "home/contactus/:id" => "home#contactus"
  match "contacts/contact" => "contacts#contact"
 match "contacts/contact_update" => "contacts#contact_update"
 match "contacts/acc_update" => "contacts#acc_update"

  devise_for :admins
  devise_for :users
  resources :categories
  resources :news
  resources :depts
  resources :faqs

  resources :tickets do
  resources :posts
  end
  resources :contacts
  match 'home/search' => 'home#search'
  get "admin/createstaff"
  get "home/news"
  get "admin/createstaff"
  get "admin/staffhome"
  get "knowlwedgebase/kbase"
  get "admin/home"
  get "admin/ticket"
  get "home/login"
  get "home/contactus"
  get "opentickets/assignticket"
  get "home/homepage"
  get "adminopentickets/staff"
  get "knowlwedgebase/detail"
  get "staff/ticket"
  get "staff/time"
  get "category/create"
  get "category/update"
  get "category/destroy"
  get "posts/create"
  get "adminopentickets/show"
  get "adminopentickets/assign"
  get "adminopentickets/support"
  get "adminpendingtickets/show"
  match 'tickets/show/:id' => 'tickets#show'
  match 'home/newsview/:id' => 'home#newsview'
  match "knowlwedgebase/show/:id" => "knowlwedgebase#show"
  match "knowlwedgebase/detail/:id" => "knowlwedgebase#detail"
  match "knowlwedgebase/kbase/:id" => "knowlwedgebase#kbase"
  match 'adminpendingtickets/view/:id' => 'adminpendingtickets#view'
  match 'adminpendingtickets/assign/:id' => 'adminpendingtickets#assign'

  match 'adminpendingtickets/change/:id' => 'adminpendingtickets#change'
  match 'adminpendingtickets/support/:id' => 'adminpendingtickets#support'
  match 'adminopentickets/view/:id' => 'adminopentickets#view'
  match 'adminopentickets/assign/:id' => 'adminopentickets#assign'
  match 'adminopentickets/support/:id' => 'adminopentickets#support'
  
   
  
 

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => "welcome#index"
    root :to => "home#homepage"
    
  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id(.:format)))'
end
