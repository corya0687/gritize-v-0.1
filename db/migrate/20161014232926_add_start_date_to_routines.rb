class AddStartDateToRoutines < ActiveRecord::Migration[5.0]
  def up
    add_column :routines, :start_date, :date
  end

  def down
    remove_column :routines, :start_date, :date
  end
end
