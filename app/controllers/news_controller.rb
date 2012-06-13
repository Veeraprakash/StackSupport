class NewsController < ApplicationController
before_filter :authenticate_admin!
  def index
    @news = News.all

  end

  def show
    
    @news = News.find(params[:id])

  end

  def new
    @news = News.new

  end

  def edit
        @news = News.find(params[:id])
  end

  def create
    @news = News.new(params[:news])

      if @news.save
        redirect_to "/news/#{@news.id}"
      else
        redirect_to "/news/new"
    end
  end

  def update
    @news = News.find(params[:id])

      if @news.update_attributes(params[:news])
        redirect_to "/news/#{@news.id}"
      else
        redirect_to "/news/#{@news.id}/edit"
    end
  end
	
  def destroy
    @news = News.find(params[:id])
    @news.destroy

    redirect_to "/news"
  end
end
