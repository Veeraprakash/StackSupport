class AddCategoryIdToFaqs < ActiveRecord::Migration
  def self.up
    add_column :faqs, :category_id, :integer
  end

  def self.down
    remove_column :faqs, :category_id
  end
end
