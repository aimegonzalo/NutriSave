class CreateNutritionalProfiles < ActiveRecord::Migration[7.1]
  def change
    create_table :nutritional_profiles do |t|
      t.references :user, null: false, foreign_key: true
      t.string :diet_type
      t.string :goal
      t.string :allergies
      t.string :medical_conditions
      t.string :excluded_ingredients
      t.boolean :digestive_sensitivity

      t.timestamps
    end
  end
end
