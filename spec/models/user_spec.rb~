require 'spec_helper'

describe User do
  
	before(:each) do
		@user = User.new(:id => "",
					:email => "vraprakashp@gmail.com",
					:crypted_password => "c3c441437a86451655a4d33a6aec7c3e02cf17cc", 
					:fullname => "veeraprakash",
					:company=> "railsfactory",
					:address1 => "chennai", 
					:state => "tamilnadu",
					:country => "india",
					:phone1 => "9994047338",
					:username => "vra" 
					 
					)
	end
	
	 it { should have_many(:tickets)}
	
	
 end
 
