class HomeController < ApplicationController
before_filter :authenticate_user!, :only => [:login, :help, :search]
  def homepage
       @news = News.all
end

def login
@tickets = Ticket.find_all_by_user_id(current_user.id)
end

def contactus
 @contact = Contact.find(params[:id])

 end

def search
  if @category=Category.find_by_category_name(params[:search])
            @tem=@category.category_name
         
  end

end 


def news
 @news = News.all
end

def newsview
   @news = News.find(params[:id])
respond_to do |format|
      format.html
end
end
end

