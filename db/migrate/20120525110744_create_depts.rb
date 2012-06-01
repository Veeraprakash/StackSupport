class CreateDepts < ActiveRecord::Migration
  def self.up
    create_table :depts do |t|
      t.string :department_name
      t.string :description
      t.string :email
      t.integer :phone1
      t.string :phone2
      t.integer :fax

      t.timestamps
    end
  end

  def self.down
    drop_table :depts
  end
end
