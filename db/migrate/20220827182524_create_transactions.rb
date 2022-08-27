class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.string :tx_ref
      t.references :user, null: false, foreign_key: true
      t.decimal :amount
      t.string :mode_of_payment

      t.timestamps
    end
  end
end
