class DeptsController < ApplicationController
before_filter :authenticate_admin!
  def index
    @depts = Dept.all

    respond_to do |format|
      format.html 
      format.xml  { render :xml => @depts }
    end
  end

  def show
    @dept = Dept.find(params[:id])

    respond_to do |format|
      format.html
      format.xml  { render :xml => @dept }
    end
  end

  def new
    @dept = Dept.new

    respond_to do |format|
      format.html
      format.xml  { render :xml => @dept }
    end
  end


  def edit
    @dept = Dept.find(params[:id])
  end

  def create
    @dept = Dept.new(params[:dept])

    respond_to do |format|
      if @dept.save
        format.html { redirect_to(@dept, :notice => 'Dept was successfully created.') }
        format.xml  { render :xml => @dept, :status => :created, :location => @dept }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @dept.errors, :status => :unprocessable_entity }
      end
    end
  end

  def update
    @dept = Dept.find(params[:id])

    respond_to do |format|
      if @dept.update_attributes(params[:dept])
        format.html { redirect_to(@dept, :notice => 'Dept was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @dept.errors, :status => :unprocessable_entity }
      end
    end
  end

  def destroy
    @dept = Dept.find(params[:id])
    @dept.destroy

    respond_to do |format|
      format.html { redirect_to(depts_url) }
      format.xml  { head :ok }
    end
  end
end
