class TransactionController < ApplicationController
    def webhook
        puts params[:tx_ref], '!!!!!'
        transaction = Transaction.find_by(tx_ref: params[:tx_ref])
     if params[:status] == 'successful'
        order = Order.find_by(transaction_id: transaction.id)
    order.paid = true
    if order.save
   return render json: order
    end
    end
    render json: { errors: 'Error mesag here'}
    end
end
