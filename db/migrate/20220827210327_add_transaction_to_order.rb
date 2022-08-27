class AddTransactionToOrder < ActiveRecord::Migration[7.0]
  def change
    add_column :orders, :transaction_id, :string
  end
end
