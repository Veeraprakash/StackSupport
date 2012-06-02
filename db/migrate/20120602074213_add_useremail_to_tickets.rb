class AddUseremailToTickets < ActiveRecord::Migration
  def self.up
    add_column :tickets, :client_email, :string
  end

  def self.down
    remove_column :tickets, :client_email
  end
end
