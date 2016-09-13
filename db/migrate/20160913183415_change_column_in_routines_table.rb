class ChangeColumnInRoutinesTable < ActiveRecord::Migration[5.0]
  def change
    change_table :routines do |t|
      t.rename :type, :focus
    end
  end
end
