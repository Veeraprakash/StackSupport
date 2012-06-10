class AddAdminidToAdmins < ActiveRecord::Migration
  def self.up
    add_column :admins, :admin_id, :integer
  end

  def self.down
    remove_column :admins, :admin_id
  end
end
