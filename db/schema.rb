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

ActiveRecord::Schema[7.0].define(version: 2022_08_24_224512) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "carts", force: :cascade do |t|
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "line_items", force: :cascade do |t|
    t.integer "quantity", default: 1
    t.integer "product_id"
    t.integer "cart_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "order_id"
  end

  create_table "orders", force: :cascade do |t|
    t.json "items", array: true
    t.bigint "user_id", null: false
    t.decimal "total"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_orders_on_user_id"
  end

  create_table "placements", force: :cascade do |t|
    t.bigint "order_id", null: false
    t.bigint "product_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["order_id"], name: "index_placements_on_order_id"
    t.index ["product_id"], name: "index_placements_on_product_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "products", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.decimal "price", precision: 10, scale: 2
    t.string "image_url"
    t.integer "stock"
    t.bigint "user_id", null: false
    t.string "orders"
    t.decimal "total", precision: 10, scale: 2
    t.decimal "total_price", precision: 10, scale: 2
    t.integer "total_quantity"
    t.decimal "total_price_per_product", precision: 10, scale: 2
    t.integer "total_price_per_product_quantity"
    t.decimal "total_price_per_product_quantity_per_user", precision: 10, scale: 2
    t.integer "total_price_per_product_quantity_per_user_quantity"
    t.decimal "total_price_per_category", precision: 10, scale: 2
    t.integer "total_price_per_category_quantity"
    t.decimal "total_price_per_category_quantity_per_user", precision: 10, scale: 2
    t.integer "total_price_per_category_quantity_per_user_quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "placements"
    t.string "#<ActiveRecord::ConnectionAdapters::PostgreSQL::TableDefinition"
    t.index ["user_id"], name: "index_products_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "mobile_number"
    t.string "health_care_address"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "orders", "users"
  add_foreign_key "placements", "orders"
  add_foreign_key "placements", "products"
  add_foreign_key "products", "users"
end
