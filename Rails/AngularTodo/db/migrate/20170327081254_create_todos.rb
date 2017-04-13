class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.integer :todo_list_id, null: false
      t.string :description, null: false
      t.boolean :completed, null: false, default: false

      t.timestamps null: false
    end
  end
end
