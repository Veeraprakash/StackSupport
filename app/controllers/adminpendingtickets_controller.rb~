class AdminpendingticketsController < ApplicationController
before_filter :authenticate_admin!
  def show
  @tickets = Ticket.find_all_by_status("Pending")
  end
  def view
   @ticket = Ticket.find(params[:id])
  end

  def assign
  @ticket = Ticket.find(params[:id])
  end

  def support
   @ticket = Ticket.find(params[:id])
  end

end
