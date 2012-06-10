class PostsController < ApplicationController
#before_filter :authenticate_user! 
#before_filter :authenticate_admin!
 def create
   
   @ticket = Ticket.find(params[:ticket_id])
   @post =@ticket.posts.build(params[:post])
   @post.save
if admin_signed_in? and current_admin.privilege == true
  redirect_to(adminopentickets_show_path)
elsif admin_signed_in? and current_admin.privilege == false
  redirect_to(staff_ticket_path)
else
   redirect_to @ticket

  end
 end
end
