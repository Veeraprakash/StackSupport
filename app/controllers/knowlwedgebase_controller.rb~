class KnowlwedgebaseController < ApplicationController
	def kbase
        @categories = Category.all
        end

  def show
    @faqs = Faq.find_all_by_category_id(params[:id])
    end

  def detail
 	@faq = Faq.find_by_id(params[:id])
  end

end
