class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.json :items, array: true
      t.references :user, null: false, foreign_key: true
      t.decimal :total
      t.timestamps
    end
  end
end
