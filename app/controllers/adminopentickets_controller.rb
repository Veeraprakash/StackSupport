class AdminopenticketsController < ApplicationController
  def show
	@tickets = Ticket.find_all_by_status("Open")
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
def postreply
@ticket = Ticket.find(params[:id])
  
   @post =@ticket.posts.build(params[:post])
   @post.save

   redirect_to :action=>'show', :controller=>"adminopentickets"
end

 	
end
