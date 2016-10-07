class CreateSubroutines < ActiveRecord::Migration[5.0]
  def change
    create_table :subroutines do |t|
      t.integer :routine_id
      t.string :name
      t.string :description
      t.boolean :complete

      t.timestamps
    end
  end
end
