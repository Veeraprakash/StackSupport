require 'spec_helper'

describe News do
  
	before(:each) do
		@news = News.new(:id => "",	
					      :subject => "Latest offers",
					      :description => "Consits of shipping informations", 
					      :news_type => false,
					      :posted_by => "",
					      :contents => "Here we can view the latest news informations from the organisations",
					      :created_at => "", 
					      :updated_at => ""
					      )

	end
		
		
		
 end
 
