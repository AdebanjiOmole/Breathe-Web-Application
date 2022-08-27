require 'rails_helper'

RSpec.describe LineItem, type: :model do
    it {should respond_to (:product_id)} 
    it {should respond_to (:cart_id)}
    it {should respond_to (:order_id)}
    it {should respond_to (:quantity)}
    it {should respond_to (:created_at)}
    it {should respond_to (:updated_at)}
    it {should respond_to (:product)}
    it {should respond_to (:cart)}
    it {should respond_to (:order)}
end
