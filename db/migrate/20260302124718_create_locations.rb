class CreateLocations < ActiveRecord::Migration[7.1]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :store_chain
      t.string :address
      t.string :city
      t.decimal :latitude
      t.decimal :longitude
      t.string :phone
      t.string :opening_hours

      t.timestamps
    end
  end
end
