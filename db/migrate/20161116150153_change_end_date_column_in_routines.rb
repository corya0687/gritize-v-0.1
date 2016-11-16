class ChangeEndDateColumnInRoutines < ActiveRecord::Migration[5.0]
  def up
    change_column :routines, :end_date, :date
  end

  def down
    change_column :routines, :end_date, :datetime
  end
end
