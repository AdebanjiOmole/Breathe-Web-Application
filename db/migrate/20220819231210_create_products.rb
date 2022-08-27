class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :title
      t.text :description
      t.decimal :price, precision: 10, scale: 2
      t.string :image_url
      t.integer :stock
      t.references :user, null: false, foreign_key: true
      t.string :orders
      t.decimal :total, precision: 10, scale: 2
      t.decimal :total_price, precision: 10, scale: 2
      t.integer :total_quantity
      t.decimal :total_price_per_product, precision: 10, scale: 2
      t.integer :total_price_per_product_quantity
      t.decimal :total_price_per_product_quantity_per_user, precision: 10, scale: 2
      t.integer :total_price_per_product_quantity_per_user_quantity
      t.decimal :total_price_per_category, precision: 10, scale: 2
      t.integer :total_price_per_category_quantity
      t.decimal :total_price_per_category_quantity_per_user, precision: 10, scale: 2
      t.integer :total_price_per_category_quantity_per_user_quantity
      t.string :placements,
      t.timestamps
    end
  end
end
