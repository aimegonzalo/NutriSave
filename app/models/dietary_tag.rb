class DietaryTag < ApplicationRecord
  has_many :product_dietary_tags, dependent: :destroy
  has_many :products, through: :product_dietary_tags
end
