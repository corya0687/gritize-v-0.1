class ChangeFocusFormatInRoutines < ActiveRecord::Migration[5.0]
  def change
    change_column :routines, :focus, :integer
  end
end
