require "spec_helper"
describe TicketsController do
	describe "routing" do
		it "routes to #index" do
			{:get => "/tickets"}.should route_to(:controller => "tickets", :action => "index")
		end
	
	
		it "routes to #new" do
			{:get => "/tickets/new"}.should route_to(:controller => "tickets", :action => "new")
		end
		
		it "routes to #create" do
			{:post => "/tickets"}.should route_to(:controller => "tickets", :action => "create")
		end

		it "routes to #destroy" do
			{:delete => "/tickets/1"}.should route_to(:controller => "tickets", :action => "destroy", :id => "1")
		end

		it "routes to #show" do
			{:get => "/tickets/1"}.should route_to(:controller => "tickets", :action => "show", :id => "1")
		end
		it "routes to #edit" do
			{:get => "/tickets/1/edit"}.should route_to(:controller => "tickets", :action => "edit", :id => "1")
		end
		it "routes to #update" do
			{:put => "/tickets/1"}.should route_to(:controller => "tickets", :action => "update", :id => "1")
		end	
	end

end
