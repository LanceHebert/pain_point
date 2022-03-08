class CreateSetStats < ActiveRecord::Migration[6.1]
  def change
    create_table :set_stats do |t|
      t.belongs_to :routine, null: false, foreign_key: true
      t.belongs_to :exercise, null: false, foreign_key: true
      t.integer :reps
      t.string :tband
      
      t.integer :sets
      t.integer :RPE

      t.timestamps
    end
  end
end