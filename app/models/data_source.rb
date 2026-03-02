class DataSource < ApplicationRecord
  has_many :product_sources, dependent: :destroy
end
