class StaffController < ApplicationController
  def ticket
   @tickets = Ticket.find_all_by_staff_email(current_admin.email)
   respond_to do |format|
      format.html 
      format.xml  { render :xml => @tickets }
    end
  end

  def time
  end

end
