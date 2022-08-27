class CreateCarts < ActiveRecord::Migration[7.0]
  def change
    create_table "carts", force: :cascade do |t|
      t.integer "user_id"
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
    end
  end
end
