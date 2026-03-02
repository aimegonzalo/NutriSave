class CreateProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :brand
      t.string :category
      t.string :ingredients
      t.string :contains_allergens
      t.string :warnings
      t.string :image_url
      t.boolean :active
      t.string :admin_notes

      t.timestamps
    end
  end
end
