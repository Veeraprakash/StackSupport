class ContactsController < ApplicationController

 def acc_update
   @acc=Contact.all
   @acc.update_attributes(params[:contact])
  redirect_to '/admin/home'
  end
 
def contact_update
   @contact=Contact.find(params[:id])
   @contact.update_attributes(params[:contact])
  redirect_to '/admin/home'
  end

end
