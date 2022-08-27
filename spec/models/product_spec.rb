require 'rails_helper'

describe Product do
  let(:product) { FactoryBot.build :product }
  subject { product }
  
  it { should respond_to :title }
  it { should respond_to :description }
  it { should respond_to :price }
  it { should respond_to :image_url }
  it { should respond_to :stock }
  it { should respond_to :placements }
  it { should respond_to :user_id }
  it { should respond_to :total }
  it { should respond_to :total_price }
  it { should respond_to :total_quantity }
  it { should respond_to :total_price_per_product }
  it { should respond_to :total_price_per_product_quantity }
  it { should respond_to :total_price_per_product_quantity_per_user }
  it { should respond_to :total_price_per_product_quantity_per_user_quantity }
  it { should respond_to :total_price_per_category_quantity }
  it { should respond_to :total_price_per_category_quantity_per_user }
  it { should respond_to :total_price_per_category_quantity_per_user_quantity }
  it { should respond_to :total_price_per_category_quantity_per_user_quantity }
  it { should respond_to :total_price_per_category_quantity}
  it { should have_many(:placements) }
  it { should have_many(:orders).through(:placements) }
end

