FactoryBot.define do
  factory :line_item do
    quantity { 1 }
    product_id { 1 }
    cart_id { 1 }
    order_id { 1 }
  end
end
