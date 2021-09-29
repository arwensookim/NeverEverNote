class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.string :title, null: false
      t.text :body
      t.integer :user_id
      t.integer :notebook_id

      t.timestamps
    end

    add_index :notes, :user_id
    add_index :notes, :notebook_id
  end
end
