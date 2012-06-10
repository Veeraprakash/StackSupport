class AddAvatarToAdmins < ActiveRecord::Migration
  def self.up
    add_column :admins, :avatar_file_name, :string
    add_column :admins, :avatar_file_size, :integer
    add_column :admins, :avatar_file_type, :string
    add_column :admins, :avatar_file_updatedat, :datetime
  end

  def self.down
    remove_column :admins, :avatar_file_updatedat
    remove_column :admins, :avatar_file_type
    remove_column :admins, :avatar_file_size
    remove_column :admins, :avatar_file_name
  end
end
