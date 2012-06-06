class AddTimetrakToTickets < ActiveRecord::Migration
  def self.up
    add_column :tickets, :date, :date
    add_column :tickets, :hours, :integer
    add_column :tickets, :description, :string
  end

  def self.down
    remove_column :tickets, :description
    remove_column :tickets, :hours
    remove_column :tickets, :date
  end
end
