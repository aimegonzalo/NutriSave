class Product < ApplicationRecord
  has_many :reports, dependent: :destroy
  has_many :favorites, dependent: :destroy
  has_many :favorited_by_users, through: :favorites, source: :user

  has_many :product_sources, dependent: :destroy

  has_many :product_dietary_tags, dependent: :destroy
  has_many :dietary_tags, through: :product_dietary_tags
end
