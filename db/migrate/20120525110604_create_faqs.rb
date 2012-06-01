class CreateFaqs < ActiveRecord::Migration
  def self.up
    create_table :faqs do |t|
      t.string :category
      t.string :subject
      t.boolean :private
      t.string :contents
      t.integer :votes_up
      t.integer :votes_down

      t.timestamps
    end
  end

  def self.down
    drop_table :faqs
  end
end
