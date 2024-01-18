class CreateLocations < ActiveRecord::Migration[7.1]
  def change
    create_table :locations do |t|
      t.string :name
      t.float :longitud
      t.float :latitude

      t.timestamps
    end
  end
end
