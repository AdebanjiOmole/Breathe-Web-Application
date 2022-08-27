class Product < ApplicationRecord
    has_many :placements
    has_many :orders, through: :placements
end
