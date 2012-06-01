class AddTickinfoToTickets < ActiveRecord::Migration
  def self.up
    add_column :tickets, :status, :string, :default => "Open"
    add_column :tickets, :customer_name, :string
    add_column :tickets, :user_id, :integer
    add_column :tickets, :staff_id, :integer
  end

  def self.down
    remove_column :tickets, :staff_id
    remove_column :tickets, :user_id
    remove_column :tickets, :customer_name
    remove_column :tickets, :status
  end
end
