class ProductSource < ApplicationRecord
  belongs_to :product
  belongs_to :location
  belongs_to :data_source
end
