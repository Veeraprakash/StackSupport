class PostsController < ApplicationController
before_filter :authenticate_user!
 def create
   
   @ticket = Ticket.find(params[:ticket_id])
   @post =@ticket.posts.build(params[:post])
   @post.save

   redirect_to @ticket
  end

end
