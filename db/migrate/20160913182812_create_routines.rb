class CreateRoutines < ActiveRecord::Migration[5.0]
  def change
    create_table :routines do |t|
      t.string :name
      t.string :type
      t.string :description
      t.integer :frequency
      t.integer :user_id

      t.timestamps
    end
  end
end
