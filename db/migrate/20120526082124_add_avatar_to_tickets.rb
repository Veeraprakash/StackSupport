class AddAvatarToTickets < ActiveRecord::Migration
  def self.up
    add_column :tickets, :avatar_file_name, :string
    add_column :tickets, :avatar_file_size, :integer
    add_column :tickets, :avatar_file_type, :string
    add_column :tickets, :avatar_file_updatedat, :date
  end

  def self.down
    remove_column :tickets, :avatar_file_updatedat
    remove_column :tickets, :avatar_file_type
    remove_column :tickets, :avatar_file_size
    remove_column :tickets, :avatar_file_name
  end
end
