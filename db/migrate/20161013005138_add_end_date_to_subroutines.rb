class AddEndDateToSubroutines < ActiveRecord::Migration[5.0]
  def change
    add_column :subroutines, :end_date, :datetime
  end
end
