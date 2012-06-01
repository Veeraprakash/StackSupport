class FaqsController < ApplicationController
before_filter :authenticate_admin!

  def index
    @faqs = Faq.all

    respond_to do |format|
      format.html 
      format.xml  { render :xml => @faqs }
    end
  end

  def show
    @faq = Faq.find(params[:id])

    respond_to do |format|
      format.html 
      format.xml  { render :xml => @faq }
    end
  end

  def new
    @faq = Faq.new

    respond_to do |format|
      format.html 
      format.xml  { render :xml => @faq }
    end
  end


  def edit
    @faq = Faq.find(params[:id])
  end

  def create
    @faq = Faq.new(params[:faq])
     @cat= Category.find_by_category_name(@faq.category).id
     @faq.category_id = @cat
    respond_to do |format|
      if @faq.save
        format.html { redirect_to(@faq, :notice => 'Faq was successfully created.') }
        format.xml  { render :xml => @faq, :status => :created, :location => @faq }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @faq.errors, :status => :unprocessable_entity }
      end
    end
  end

  def update
    @faq = Faq.find(params[:id])

    respond_to do |format|
      if @faq.update_attributes(params[:faq])
        format.html { redirect_to(@faq, :notice => 'Faq was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @faq.errors, :status => :unprocessable_entity }
      end
    end
  end

  def destroy
    @faq = Faq.find(params[:id])
    @faq.destroy

    respond_to do |format|
      format.html { redirect_to(faqs_url) }
      format.xml  { head :ok }
    end
  end
end
