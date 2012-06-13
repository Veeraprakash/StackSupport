require 'spec_helper'

describe Dept do
	before(:each) do
		@dept = Dept.new(:id => "",
				:department_name => "Sales",
				:description => "welcome to sales department",
				:email => "sales@rails.com",
				:phone1 => "9994047338",
				:phone2 => "9989898989",
				:fax => "9989898989"
					)
	end
	
	it "Dept's want to be in presence for the department_name" do
		Dept.new.should validate_presence_of(:department_name)
	end
		
	it "Dept's want to be in presence for the answer" do
		Dept.new.should validate_presence_of(:email)
	end

		
end
