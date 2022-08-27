class OrdersController < ApplicationController
  before_action :authorize_request
  def index
    print "index!"
    @orders = Order.all.where(user_id: @current_user.id).order('created_at DESC')
    if @orders  
      render json: @orders
   else 
     render json: {errors: 'not found ' }
   end
  end

  def show
    @order = Order.find(params[:id])
  end

  def new
    @order = Order.new
  end

  def create
    product_ids = order_params[:products].map {|product| product[:id] }
    products = Product.find(product_ids)
    out_of_stock_product = products.find{ |prd| prd[:stock] <= 0 }
    print out_of_stock_product
if out_of_stock_product
  return render json: { errors: "#{out_of_stock_product.title} is out of stock"}
end

    items = products.map do|item| 
      product = order_params[:products].find { |product| product[:id] == item[:id] }
      {product_id: item[:id], price: item[:price], quantity: product[:quantity] } 
    end
    total = items.map { |item| item[:price] * item[:quantity] }.sum
    @order = Order.new(items: items, total: total, user_id: @current_user.id)
    if @order.save  
      @order.items.each do |item|
        print item
        print item[:product_id]
        product = Product.find(item["product_id"])
        product.stock = product.stock - item["quantity"]
    product.save
  end
      render json: @order
   else 
     render json: {errors: @order.errors.full_messages }
   end   
  end
  
  private
    def order_params
      params.require(:order).permit(:pay_method, products: [:id, :quantity]
      )
    end
end