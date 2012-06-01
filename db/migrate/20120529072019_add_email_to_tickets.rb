class AddEmailToTickets < ActiveRecord::Migration
  def self.up
    add_column :tickets, :staff_email, :string
  end

  def self.down
    remove_column :tickets, :staff_email
  end
end
