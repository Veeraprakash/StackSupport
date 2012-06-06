class StaffController < ApplicationController
  def ticket
   @tickets = Ticket.find_all_by_staff_email(current_admin.email)
   respond_to do |format|
      format.html 
      format.xml  { render :xml => @tickets }
    end
  end
def view
  @ticket = Ticket.find(params[:id])

end

def pending
	@tickets = Ticket.find_all_by_staff_email(current_admin.email)
  	respond_to do |format|
 	if @tickets = Ticket.find_all_by_status("Pending")
	format.html 
	format.xml  { render :xml => @tickets }

	end
    end
end
def closed
	@tickets = Ticket.find_all_by_staff_email(current_admin.email)
  	respond_to do |format|
 	if @tickets = Ticket.find_all_by_status("Closed")
	format.html 
	format.xml  { render :xml => @tickets }

	end
    end
end

  def time
      @ticket = Ticket.find(params[:id])
   
end
def tracksheet
	@ticket = Ticket.find(params[:id])
end
end
