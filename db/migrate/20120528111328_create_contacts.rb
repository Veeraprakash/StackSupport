class CreateContacts < ActiveRecord::Migration
  def self.up
    create_table :contacts do |t|
      t.string :company_name
      t.string :tag_line
      t.string :logo
      t.string :address
      t.integer :zip_code
      t.integer :phone
      t.integer :fax
      t.string :website
      t.date :account_created
      t.string :time_zone
      t.date :date_format
      t.string :name
      t.string :email
      t.integer :phone

      t.timestamps
    end
  end

  def self.down
    drop_table :contacts
  end
end
