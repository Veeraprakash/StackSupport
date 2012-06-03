class AdminclosedticketsController < ApplicationController
 before_filter :authenticate_admin!
  def show
	@tickets = Ticket.find_all_by_status("Closed")
  end
 def view
  @ticket = Ticket.find(params[:id])
 end

  def assign
  @ticket = Ticket.find(params[:id])
  @staff = Admin.all
 
  end

  def support
 @ticket = Ticket.find(params[:id])
  
  end
end
