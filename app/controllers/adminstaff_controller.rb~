class AdminstaffController < ApplicationController
before_filter :authenticate_admin!
  def new
	@admin = Admin.new
	respond_to do |format|
      	format.html 
      	format.xml  { render :xml => @admin }
end
  end

  def create
	@admin = Admin.new(params[:admin])

    respond_to do |format|
      if @admin.save
      format.html { redirect_to "/adminstaff/index" }
       
      else
        format.html { render :action => "new" }
        end
    end	
	
  end

  def index
	@admin = Admin.find_all_by_admin_id(current_admin.id)
   # @staff = Admin.all

    respond_to do |format|
      format.html
      format.xml  { render :xml => @admin }
    end
  end

  def show
	@admin = Admin.find(params[:id])

    respond_to do |format|
      format.html
      format.xml  { render :xml => @admin }
    end
  end

  def edit
	@admin = Admin.find(params[:id])
  end

  def update
	@admin = Admin.find(params[:id])

    respond_to do |format|
      if @admin.update_attributes(params[:admin])
        format.html { redirect_to(@admin) }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @admin.errors, :status => :unprocessable_entity }
      end
    end
end
  

  def destroy
	@admin = Admin.find(params[:id])
    @admin.destroy

    respond_to do |format|
      format.html { redirect_to(admins_url) }
      format.xml  { head :ok }
    end
  end

end
