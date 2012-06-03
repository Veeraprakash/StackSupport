class PostsController < ApplicationController
#before_filter :authenticate_user! 
#before_filter :authenticate_admin!
 def create
   
   @ticket = Ticket.find(params[:ticket_id])
   @post =@ticket.posts.build(params[:post])
   @post.save
if admin_signed_in?
  redirect_to(adminopentickets_show_path)
else
   redirect_to @ticket
  end
end
end
