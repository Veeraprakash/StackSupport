class CategoriesController < ApplicationController
before_filter :authenticate_admin!
	
  def index
    @categories = Category.all

  end

  def show
    @category = Category.find(params[:id])

    end

  def new
    @category = Category.new

   end

  def edit
    @category = Category.find(params[:id])
  end

  def create
    @category = Category.new(params[:category])

      if @category.save
        redirect_to "/categories/#{@category.id}"
      else
         redirect_to "/categories/new"
  end
end
  def update
    @category = Category.find(params[:id])

      if @category.update_attributes(params[:category])
        redirect_to "/categories/#{@category.id}"
      else
       redirect_to "/categories/#{@category.id}/edit"
     
    end
  end

  def destroy
    @category = Category.find(params[:id])
    @category.destroy

    redirect_to "/categories"
  end
end
