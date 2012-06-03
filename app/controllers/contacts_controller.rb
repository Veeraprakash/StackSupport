class ContactsController < ApplicationController
 def accinfo
@acc = Contact.new    

    respond_to do |format|
      format.html 
      format.xml  { render :xml => @acc }
end
 end
def acc_update
   @acc=Contact.last
   @acc.update_attributes(params[:contact])
  redirect_to '/admin/home'
  end

  def contact

 @contact = Contact.new    

    respond_to do |format|
      format.html 
      format.xml  { render :xml => @contact }

    end
  end
def contact_update
   @contact=Contact.last
   @contact.update_attributes(params[:contact])
  redirect_to '/admin/home'
  end

end
