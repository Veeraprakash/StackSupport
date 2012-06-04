class CreateDepts < ActiveRecord::Migration
  def self.up
    create_table :depts do |t|
      t.string :department_name
      t.string :description
      t.string :email
      t.string :phone1
      t.string :phone2
      t.string :fax

      t.timestamps
    end
  end

  def self.down
    drop_table :depts
  end
end
