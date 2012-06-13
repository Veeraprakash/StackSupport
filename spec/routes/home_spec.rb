describe HomeController do
 describe "routing" do
  it "routes to #home" do
    {:get => "/home/homepage"}.should route_to(:controller => "home", :action => "homepage")
  end
  it "routes to #show" do
   {:get => "/contacts/1"}.should route_to(:controller => "contacts", :action => "show",:id=>"1")
  end
  it "routes to #new" do
    {:get => "/contacts/new"}.should route_to(:controller => "contacts", :action => "new")
  end
