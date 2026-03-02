class CreateProductDietaryTags < ActiveRecord::Migration[7.1]
  def change
    create_table :product_dietary_tags do |t|
      t.references :product, null: false, foreign_key: true
      t.references :dietary_tag, null: false, foreign_key: true

      t.timestamps
    end
  end
end
