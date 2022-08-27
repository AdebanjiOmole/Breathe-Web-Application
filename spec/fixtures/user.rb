FactoryBot.define do
    factory :user do
      first_name { 'John' }
      last_name  { 'Doe' }
      email { 'john@email_provider.com' }
      mobile_number { 7860945310 }
      password { 'password' }
    end
  end