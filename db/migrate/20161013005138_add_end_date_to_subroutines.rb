class AddEndDateToSubroutines < ActiveRecord::Migration[5.0]
  def change
    add_column :subroutines, :integer, :end_time
  end
end
