class StaffController < ApplicationController
before_filter :authenticate_admin!
  def ticket
   @tickets = Ticket.find_all_by_staff_email(current_admin.email)
	
  end
def view
  @ticket = Ticket.find(params[:id])

end

def pending
	@tickets = Ticket.find_all_by_staff_email(current_admin.email)
 	 @tickets = Ticket.find_all_by_status("Pending")
	
end
def closed
	@tickets = Ticket.find_all_by_staff_email(current_admin.email)
  	
 	 @tickets = Ticket.find_all_by_status("Closed")
	
end

  def time
      @ticket = Ticket.find(params[:id])
end

def time_update
@ticket = Ticket.find(params[:id])

if @ticket.update_attributes(:date=>params[:@ticket][:date], :hours=>params[:@ticket][:hours], :description=>params[:@ticket][:description])
	redirect_to(staff_tracksheet_path)
   end
end
def tracksheet
	@tickets = Ticket.find_all_by_staff_email(current_admin.email)
	
	
	
end
end
