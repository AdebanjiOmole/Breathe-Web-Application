class User < ApplicationRecord
    has_many :orders, dependent: :destroy
    has_secure_password
    validates :email, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password,
              length: { minimum: 6 },
              if: -> { new_record? || !password.nil? }
    validates :first_name, presence: true          
    validates :last_name, presence: true
    validates :mobile_number, presence: true
    validates :health_care_address, presence: true
  end