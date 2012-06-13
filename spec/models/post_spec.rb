require 'spec_helper'

describe Post do
  
	before(:each) do
		@post = Post.new(:id => "",	
					      :message => "Hi veera",
					      :ticket_id => "", 
					      :author => "",
					      :created_at => "", 
					      :updated_at => ""
					      )

	end
		
		#it { should belong_to(:ticket)}
		
 end
 
