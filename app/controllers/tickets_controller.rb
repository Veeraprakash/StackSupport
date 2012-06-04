class TicketsController < ApplicationController

before_filter :authenticate_user!, :unless => :admin_signed_in?

  def index
    @tickets = Ticket.find_all_by_user_id(current_user.id)
    #@tickets = Ticket.all

    respond_to do |format|
      format.html 
      format.xml  { render :xml => @tickets }
    end
  end

  def show
    @ticket = Ticket.find(params[:id])
     @post = @ticket.posts.build
       respond_to do |format|
      format.html 
      format.xml  { render :xml => @ticket }
    end
  end

  def new
    @ticket = Ticket.new

    respond_to do |format|
      format.html 
      format.xml  { render :xml => @ticket }
    end
  end


  def edit
    @ticket = Ticket.find(params[:id])
  end

  def create
    @ticket = Ticket.new(params[:ticket])

    respond_to do |format|
      if @ticket.save
        format.html { redirect_to(@ticket, :notice => 'Ticket was successfully created.') }
        format.xml  { render :xml => @ticket, :status => :created, :location => @ticket }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @ticket.errors, :status => :unprocessable_entity }
      end
    end
  end


  def update
    @ticket = Ticket.find(params[:id])
    respond_to do |format|
      if @ticket.update_attributes(params[:ticket])
	 @ticket.update_attributes(:status => "Pending") 

        if admin_signed_in?  
       format.html { redirect_to(admin_ticket_path, :notice => 'Ticket was successfully updated.') }
else
	format.html { redirect_to(@ticket, :notice => 'Ticket was successfully updated.') }
end
        format.xml  { head :ok }

	else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @ticket.errors, :status => :unprocessable_entity }
      end
    end
  end

  def destroy
    @ticket = Ticket.find(params[:id])
    @ticket.destroy

    respond_to do |format|
      format.html { redirect_to(tickets_url) }
      format.xml  { head :ok }
    end
  end
end
