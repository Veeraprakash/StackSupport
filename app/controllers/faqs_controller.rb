class FaqsController < ApplicationController
before_filter :authenticate_admin!, :except => [:update]

  def index
    @faqs = Faq.all

  end

  def show
    @faq = Faq.find(params[:id])

  end

  def new
    @faq = Faq.new
 end


  def edit
    @faq = Faq.find(params[:id])
  end

  def create
    @faq = Faq.new(params[:faq])
     @cat= Category.find_by_category_name(@faq.category).id
     @faq.category_id = @cat
        if @faq.save
        redirect_to "/faqs/#{@cat}"
      else
        redirect_to "/faqs/new"
   
    end
  end

  def update
    @faq = Faq.find(params[:id])

      if @faq.update_attributes(params[:faq])
        redirect_to "/faqs/#{@faq.id}"
      else
        redirect_to "/faqs/#{@faq.id}/edit"
     end
  end

  def destroy
    @faq = Faq.find(params[:id])
    @faq.destroy
	 redirect_to "/faqs"
     end
end
