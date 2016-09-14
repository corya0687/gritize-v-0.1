class AddEndDateToRoutines < ActiveRecord::Migration[5.0]
  def change
    add_column :routines, :end_date, :datetime
  end
end
