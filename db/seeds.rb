# db/seed.rb
puts "Seeding..."
User.create(first_name: 'Matz', last_name: 'Ruby', email: 'abc@gmail.com', mobile_number: '1234567890', health_care_address: '123 Main St', password: 'password')
LineItem.create(product_id: 1, quantity: 1)
# Order.create(size: 'S', quantity: 1, total: 10.00, user_id: 1) 
Product.create(title: 'Product 1', description: 'Description 1', price: 1, stock: 5, user_id: 1)
Product.create(title: 'Product 2', description: 'Description 1', price: 1, stock: 15, user_id: 1)
Product.create(title: 'Product 3', description: 'Description 1', price: 1, stock: 25, user_id: 1)
Placement.create(order_id: 1, product_id: 1)
Cart.create(user_id: 1)
puts "Seeding done."