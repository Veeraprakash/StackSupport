class CreateFaqs < ActiveRecord::Migration
  def self.up
    create_table :faqs do |t|
      t.string :category
      t.string :subject
      t.boolean :private
      t.string :contents
      t.integer :votes_up, :default =>0
      t.integer :votes_down, :default =>0

      t.timestamps
    end
  end

  def self.down
    drop_table :faqs
  end
end
