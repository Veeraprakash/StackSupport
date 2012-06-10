class Ticket < ActiveRecord::Base
validates :message, :presence => true
validates :subject, :presence => true
has_many :posts
belongs_to :user
belongs_to :dept
has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "100x100>" }

has_attached_file :avatar,
       :styles => { :medium => "300x300>", :thumb => "100x100>" },
     :storage => :s3,
     :s3_credentials => "#{RAILS_ROOT}/config/s3.yml"
     
attr_accessible :to, :category, :priority, :subject, :message, :created_at, :updated_at, :status, :customer_name, :user_id, :staff_id, :avatar_file_name, :avatar_file_size, :avatar_file_type, :avatar_file_updatedat,:staff_email, :client_email, :date, :hours, :description 
end
