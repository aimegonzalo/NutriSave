class CreateProductSources < ActiveRecord::Migration[7.1]
  def change
    create_table :product_sources do |t|
      t.references :product, null: false, foreign_key: true
      t.references :location, null: false, foreign_key: true
      t.references :data_source, null: false, foreign_key: true
      t.string :store_name
      t.decimal :price
      t.string :currency
      t.datetime :last_updated_at

      t.timestamps
    end
  end
end
