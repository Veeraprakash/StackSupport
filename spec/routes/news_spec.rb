describe NewsController do
 describe "routing" do
  it "routes to #index" do
    {:get => "/news"}.should route_to(:controller => "news", :action => "index")
  end
  it "routes to #new" do
   {:get => "/news/new"}.should route_to(:controller => "news", :action => "new")
  end
it "routes to #create" do
    {:post => "/news"}.should route_to(:controller => "news", :action => "create")
  end
  it "routes to #edit" do
    {:get => "/news/1/edit"}.should route_to(:controller => "news", :action => "edit", :id => "1")
  end
it "routes to #show" do
    {:get => "/news/1"}.should route_to(:controller => "news", :action => "show", :id => "1")
  end
it "routes to #update" do
     {:put => "/news/1"}.should route_to(:controller => "news", :action => "update", :id => "1")
  end
it "routes to #destroy" do
     {:delete => "/news/1"}.should route_to(:controller => "news", :action => "destroy", :id => "1")
  end
  end
  end
