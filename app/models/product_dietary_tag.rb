class ProductDietaryTag < ApplicationRecord
  belongs_to :product
  belongs_to :dietary_tag
end
