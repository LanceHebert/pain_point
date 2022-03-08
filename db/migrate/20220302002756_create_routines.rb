class CreateRoutines < ActiveRecord::Migration[6.1]
  def change
    create_table :routines do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :muscle_group, null: false, foreign_key: true
      t.date :date
      t.integer :routine
      t.integer :pain


      t.timestamps
    end
  end
end
