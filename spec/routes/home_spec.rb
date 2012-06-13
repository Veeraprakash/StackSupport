describe HomeController do
 describe "routing" do
  it "routes to #homepage" do
    {:get => "/home/homepage"}.should route_to(:controller => "home", :action => "homepage")
  end
  it "routes to #contactus" do
   {:get => "/home/contactus"}.should route_to(:controller => "home", :action => "contactus")
  end
  it "routes to #news" do
    {:get => "/home/news"}.should route_to(:controller => "home", :action => "news")
  end
it "routes to #login" do
    {:get => "/home/login"}.should route_to(:controller => "home", :action => "login")
  end
it "routes to #login" do
     get("/home/search").should route_to("home#search")
  end
  end
  end
