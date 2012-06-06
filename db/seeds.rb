# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Daley', :city => cities.first)

Admin.create(:fullname => 'Vraprakash', :email => 'vraprakashp@gmail.com', :password => 'adminrails', :role => 'Admin', :privilege => true, :ticket_notifier => true)
