require 'spec_helper'

describe Ticket do
  
	before(:each) do
		@ticket = Ticket.new(:id => "",
						:to => "",
						:user_id => "", 
						:category => "",
						:priority => "High",
						:subject => "Product warranty extension", 
						:message => "How to extend the warranty for the product", 
						:status => "", 
						:customer_name => "veera",
						:staff_email => "staff1@gmail.com",
						:client_email => "client@gmail.com"
						)
	end
					
	 it { should belong_to(:user)}
	 it { should has_many(:post)}
	it { should belong_to( :dept)}
	#it { should belong_to(:user)}


 end
 
