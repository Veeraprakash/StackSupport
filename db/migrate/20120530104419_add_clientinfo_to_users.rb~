class AddClientinfoToUsers < ActiveRecord::Migration
  def self.up
    add_column :users, :fullname, :string
    add_column :users, :company, :string
    add_column :users, :address1, :string
    add_column :users, :address2, :string
    add_column :users, :city, :string
    add_column :users, :state, :string
    add_column :users, :country, :string
    add_column :users, :phone1, :string
    add_column :users, :phone2, :string
    add_column :users, :fax, :string
    add_column :users, :web, :string
    add_column :users, :username, :string
    add_column :users, :admin_id, :integer
  end

  def self.down
    remove_column :users, :admin_id
    remove_column :users, :username
    remove_column :users, :web
    remove_column :users, :fax
    remove_column :users, :phone2
    remove_column :users, :phone1
    remove_column :users, :country
    remove_column :users, :state
    remove_column :users, :city
    remove_column :users, :address2
    remove_column :users, :address1
    remove_column :users, :company
    remove_column :users, :fullname
  end
end
