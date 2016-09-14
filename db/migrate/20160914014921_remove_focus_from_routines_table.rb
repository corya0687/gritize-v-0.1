class RemoveFocusFromRoutinesTable < ActiveRecord::Migration[5.0]
  def change
    remove_column :routines, :focus
    remove_column :routines, :frequency
  end
end
