class AddProfileToAdmins < ActiveRecord::Migration
  def self.up
    add_column :admins, :full_name, :string
    add_column :admins, :username, :string
    add_column :admins, :phone, :integer
    add_column :admins, :mobile, :integer
    add_column :admins, :department, :string
    add_column :admins, :ticket_notifier, :boolean
    add_column :admins, :privilege, :boolean, :default =>true 
    add_column :admins, :find_your_attachment, :string
  end

  def self.down
    remove_column :admins, :find_your_attachment
    remove_column :admins, :privilege
    remove_column :admins, :ticket_notifier
    remove_column :admins, :department
    remove_column :admins, :mobile
    remove_column :admins, :phone
    remove_column :admins, :username
    remove_column :admins, :full_name
  end
end
