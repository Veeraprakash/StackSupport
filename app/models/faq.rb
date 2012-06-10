class Faq < ActiveRecord::Base
validates :subject, :presence => true
validates :contents, :presence => true
belongs_to :categories
end
