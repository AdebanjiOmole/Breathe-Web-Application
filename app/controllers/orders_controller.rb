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
# if out_of_stock_product
#   return render json: { errors: "#{out_of_stock_product.title} is out of stock"}
# end

    items = products.map do|item| 
      product = order_params[:products].find { |product| product[:id] == item[:id] }
      {product_id: item[:id], price: item[:price], quantity: product[:quantity] } 
    end
    total = items.map { |item| item[:price] * item[:quantity] }.sum
    transaction = Transaction.create!(amount: total, user_id:@current_user.id, mode_of_payment: 'card')

   transaction_payload = {
  tx_ref: transaction[:tx_ref],
   amount: total,
   currency: "NGN",
    customer: {
        email: @current_user.email,
         name: "#{@current_user.first_name} #{@current_user.last_name}"
     },
    redirect_url: 'http://localhost:3000/webhook'
}
link = Payment.generate_payment_link(transaction_payload)
print link
    @order = Order.new(items: items, total: total, user_id: @current_user.id, transaction_id: transaction.id )
    if @order.save  
      @order.items.each do |item|
        print item
        print item[:product_id]
        product = Product.find(item["product_id"])
        product.stock = product.stock - item["quantity"]
    product.save
  end
      render json: {link: link }
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