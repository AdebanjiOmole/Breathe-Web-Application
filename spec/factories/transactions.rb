FactoryBot.define do
  factory :transaction do
    tx_ref { "MyString" }
    user { nil }
    amount { "9.99" }
    mode_of_payment { "MyString" }
  end
end
