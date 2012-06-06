class AddRoleToAdmins < ActiveRecord::Migration
  def self.up
    add_column :admins, :role, :string, :default => "staff"
  end

  def self.down
    remove_column :admins, :role
  end
end
