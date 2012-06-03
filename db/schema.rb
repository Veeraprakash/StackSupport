# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120602081201) do

  create_table "admins", :force => true do |t|
    t.string   "email",                                 :default => "",      :null => false
    t.string   "encrypted_password",     :limit => 128, :default => "",      :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                         :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "password_salt"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "role",                                  :default => "admin"
    t.string   "full_name"
    t.string   "username"
    t.integer  "phone"
    t.integer  "mobile"
    t.string   "department"
    t.boolean  "ticket_notifier"
    t.boolean  "privilege",                             :default => true
    t.string   "find_your_attachment"
  end

  add_index "admins", ["email"], :name => "index_admins_on_email", :unique => true
  add_index "admins", ["reset_password_token"], :name => "index_admins_on_reset_password_token", :unique => true

  create_table "categories", :force => true do |t|
    t.string   "category_name"
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "contacts", :force => true do |t|
    t.string   "general_phone1"
    t.string   "general_phone2"
    t.string   "mailing_address"
    t.string   "tech_email"
    t.string   "tech_phone"
    t.string   "tech_fax"
    t.string   "tech_desc"
    t.string   "sales_email"
    t.string   "sales_phone"
    t.string   "sales_fax"
    t.string   "sales_desc"
    t.string   "company_name"
    t.string   "tag_line"
    t.string   "logo"
    t.string   "address"
    t.integer  "zip"
    t.string   "phone"
    t.string   "fax"
    t.string   "web"
    t.date     "created_date"
    t.time     "time"
    t.string   "date_format"
    t.string   "name"
    t.string   "email"
    t.string   "company_phone"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "depts", :force => true do |t|
    t.string   "department_name"
    t.string   "description"
    t.string   "email"
    t.integer  "phone1"
    t.string   "phone2"
    t.integer  "fax"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "faqs", :force => true do |t|
    t.string   "category"
    t.string   "subject"
    t.boolean  "private"
    t.string   "contents"
    t.integer  "votes_up",    :default => 0
    t.integer  "votes_down",  :default => 0
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "category_id"
  end

  create_table "news", :force => true do |t|
    t.string   "subject"
    t.string   "description"
    t.boolean  "news_type"
    t.string   "posted_by"
    t.string   "contents"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "posts", :force => true do |t|
    t.string   "message"
    t.integer  "ticket_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "tickets", :force => true do |t|
    t.string   "to"
    t.string   "category"
    t.string   "priority"
    t.string   "subject"
    t.string   "message"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "status",                :default => "Open"
    t.string   "customer_name"
    t.integer  "user_id"
    t.integer  "staff_id"
    t.string   "avatar_file_name"
    t.integer  "avatar_file_size"
    t.string   "avatar_file_type"
    t.date     "avatar_file_updatedat"
    t.string   "staff_email"
    t.string   "client_email"
  end

  create_table "users", :force => true do |t|
    t.string   "email",                                 :default => "",     :null => false
    t.string   "encrypted_password",     :limit => 128, :default => "",     :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                         :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "password_salt"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "role",                                  :default => "user"
    t.string   "fullname"
    t.string   "company"
    t.string   "address1"
    t.string   "address2"
    t.string   "city"
    t.string   "state"
    t.string   "country"
    t.integer  "phone1"
    t.integer  "phone2"
    t.integer  "fax"
    t.string   "web"
    t.string   "username"
    t.integer  "admin_id"
  end

  add_index "users", ["confirmation_token"], :name => "index_users_on_confirmation_token", :unique => true
  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

end
