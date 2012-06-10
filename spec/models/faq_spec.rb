require 'spec_helper'

describe Faq do
	before(:each) do
		@faq = Faq.new(:subject => "How to find IP address?",
				:category => "",
				:private => true,
				:votes_up => "",
				:votes_down => "",
				:contents => "Use the command ipconfig|more"
					)
	end
	
	it "Faq's want to be in presence for the question" do
		Faq.new.should validate_presence_of(:subject)
	end
		
	it "Faq's want to be in presence for the answer" do
		Faq.new.should validate_presence_of(:contents)
	end

		it "Should have atleast one category" do
		 @faq.should have_one(:category)
end
end
