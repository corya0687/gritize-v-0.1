class AddStartDateToRoutines < ActiveRecord::Migration[5.0]
  def up
    change_column :routines, :end_date, :date
    add_column :routines, :start_date, :date
  end

  def down
    change_column :routines, :end_date, :datetime
    remove_column :routines, :start_date, :date
  end
end
