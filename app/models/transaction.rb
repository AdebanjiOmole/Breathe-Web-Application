class Transaction < ApplicationRecord
  before_create :set_tx_ref
  belongs_to :user

   private

  def set_tx_ref
    self.tx_ref = generate_token
  end

  def generate_token
    loop do
      token = SecureRandom.hex(10)

      break token unless Transaction.where(tx_ref: token).exists?
    end
  end
end
