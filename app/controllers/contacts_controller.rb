class ContactsController < ApplicationController
before_filter :authenticate_admin!
 def acc_update
   @acc=Contact.all
   @acc.update_attributes(params[:contact])
  redirect_to '/admin/home'
  end
 
def contact_update
   
   @contact=Contact.find(params[:id])
    @contact.update_attributes(params[:contact])
	@contact.save
	
  redirect_to '/admin/home'
  
end
def contact
   @temp=Contact.all
end   
end
