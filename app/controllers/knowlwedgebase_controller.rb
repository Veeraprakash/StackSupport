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
  def votesup
      faq = Faq.find_by_id(params[:id])

    puts  faq.votes_up+=1

	faq.update_attributes(:votes_up =>faq.votes_up)
      redirect_to :back
       
       end
def votesdown
      faq = Faq.find_by_id(params[:id])

    puts  faq.votes_down+=1

	faq.update_attributes(:votes_down =>faq.votes_down)
      redirect_to :back
       
       end
end
