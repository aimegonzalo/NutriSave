class CreateNutritionalRules < ActiveRecord::Migration[7.1]
  def change
    create_table :nutritional_rules do |t|
      t.string :name
      t.string :description
      t.string :rule_type
      t.string :condition
      t.string :action
      t.boolean :active

      t.timestamps
    end
  end
end
