# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2026_03_02_125352) do
  create_table "data_sources", force: :cascade do |t|
    t.string "name"
    t.integer "source_type"
    t.string "base_url"
    t.boolean "active"
    t.datetime "last_synced_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "dietary_tags", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "category"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "favorites", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "product_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "index_favorites_on_product_id"
    t.index ["user_id"], name: "index_favorites_on_user_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "name"
    t.string "store_chain"
    t.string "address"
    t.string "city"
    t.decimal "latitude"
    t.decimal "longitude"
    t.string "phone"
    t.string "opening_hours"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "nutritional_profiles", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "diet_type"
    t.string "goal"
    t.string "allergies"
    t.string "medical_conditions"
    t.string "excluded_ingredients"
    t.boolean "digestive_sensitivity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_nutritional_profiles_on_user_id"
  end

  create_table "nutritional_rules", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "rule_type"
    t.string "condition"
    t.string "action"
    t.boolean "active"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "product_dietary_tags", force: :cascade do |t|
    t.integer "product_id", null: false
    t.integer "dietary_tag_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dietary_tag_id"], name: "index_product_dietary_tags_on_dietary_tag_id"
    t.index ["product_id"], name: "index_product_dietary_tags_on_product_id"
  end

  create_table "product_sources", force: :cascade do |t|
    t.integer "product_id", null: false
    t.integer "location_id", null: false
    t.integer "data_source_id", null: false
    t.string "store_name"
    t.decimal "price"
    t.string "currency"
    t.datetime "last_updated_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["data_source_id"], name: "index_product_sources_on_data_source_id"
    t.index ["location_id"], name: "index_product_sources_on_location_id"
    t.index ["product_id"], name: "index_product_sources_on_product_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.string "brand"
    t.string "category"
    t.string "ingredients"
    t.string "contains_allergens"
    t.string "warnings"
    t.string "image_url"
    t.boolean "active"
    t.string "admin_notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reports", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "product_id", null: false
    t.text "reason"
    t.text "description"
    t.text "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "index_reports_on_product_id"
    t.index ["user_id"], name: "index_reports_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "favorites", "products"
  add_foreign_key "favorites", "users"
  add_foreign_key "nutritional_profiles", "users"
  add_foreign_key "product_dietary_tags", "dietary_tags"
  add_foreign_key "product_dietary_tags", "products"
  add_foreign_key "product_sources", "data_sources"
  add_foreign_key "product_sources", "locations"
  add_foreign_key "product_sources", "products"
  add_foreign_key "reports", "products"
  add_foreign_key "reports", "users"
end
