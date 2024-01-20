class CreateLocations < ActiveRecord::Migration[7.1]
  def change
    create_table :locations do |t|
      t.string :name, null: false
      t.float :longitud, null: false
      t.float :latitude, null: false
      t.timestamps
    end
  end
end
