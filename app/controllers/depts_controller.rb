class DeptsController < ApplicationController
before_filter :authenticate_admin!
  def index
    @depts = Dept.all

  end

  def show
    @dept = Dept.find(params[:id])
   
    
  end

  def new
    @dept = Dept.new

   end


  def edit
    @dept = Dept.find(params[:id])
  end

  def create
    @dept = Dept.new(params[:dept])

      if @dept.save
        redirect_to "/depts/#{@dept.id}"
      else
        redirect_to "/depts/new"
      
    end
  end

  def update
    @dept = Dept.find(params[:id])

      if @dept.update_attributes(params[:dept])
        redirect_to "/depts/#{@dept.id}"
      else
        redirect_to "/depts/#{@dept.id}/edit"
      
    end
  end

  def destroy
    @dept = Dept.find(params[:id])
    @dept.destroy

   redirect_to "/depts"
 end
end
