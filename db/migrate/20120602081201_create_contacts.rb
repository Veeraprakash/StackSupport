class CreateContacts < ActiveRecord::Migration
  def self.up
    create_table :contacts do |t|
      t.string :general_phone1
      t.string :general_phone2
      t.string :mailing_address
      t.string :tech_email
      t.string :tech_phone
      t.string :tech_fax
      t.string :tech_desc
      t.string :sales_email
      t.string :sales_phone
      t.string :sales_fax
      t.string :sales_desc
      t.string :company_name
      t.string :tag_line
      t.string :logo
      t.string :address
      t.integer :zip
      t.string :phone
      t.string :fax
      t.string :web
      t.date :created_date
      t.time :time
      t.string :date_format
      t.string :name
      t.string :email
      t.string :company_phone

      t.timestamps
    end
  end

  def self.down
    drop_table :contacts
  end
end
