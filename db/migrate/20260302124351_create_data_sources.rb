class CreateDataSources < ActiveRecord::Migration[7.1]
  def change
    create_table :data_sources do |t|
      t.string :name
      t.integer :source_type
      t.string :base_url
      t.boolean :active
      t.datetime :last_synced_at

      t.timestamps
    end
  end
end
