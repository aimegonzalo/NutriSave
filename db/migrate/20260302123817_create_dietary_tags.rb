class CreateDietaryTags < ActiveRecord::Migration[7.1]
  def change
    create_table :dietary_tags do |t|
      t.string :name
      t.string :description
      t.string :category

      t.timestamps
    end
  end
end
