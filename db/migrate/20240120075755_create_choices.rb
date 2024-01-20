class CreateChoices < ActiveRecord::Migration[7.1]
  def change
    create_table :choices do |t|
      t.string :choice_name, null: false
      t.references :location
      t.timestamps
    end
  end
end
