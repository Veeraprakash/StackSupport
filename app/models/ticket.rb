class Ticket < ActiveRecord::Base
has_many :posts
belongs_to :admin
has_one :dept
has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "100x100>" }
attr_accessible :to, :category, :priority, :subject, :message, :created_at, :updated_at, :status, :customer_name, :user_id, :staff_id, :avatar_file_name, :avatar_file_size, :avatar_file_type, :avatar_file_updatedat,:staff_email, :client_email
end
