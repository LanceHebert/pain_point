class CreateSessions < ActiveRecord::Migration[6.1]
  def change
    create_table :sessions do |t|
      t.belongs_to :user
      t.belongs_to :muscle_group
      t.date :date
      t.integer :session
      t.timestamps
    end
  end
end
