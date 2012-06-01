class CreateTickets < ActiveRecord::Migration
  def self.up
    create_table :tickets do |t|
      t.string :to
      t.string :category
      t.string :priority
      t.string :subject
      t.string :message

      t.timestamps
    end
  end

  def self.down
    drop_table :tickets
  end
end
