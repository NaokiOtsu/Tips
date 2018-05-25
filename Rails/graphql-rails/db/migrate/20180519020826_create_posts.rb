class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :subject
      t.integer :user_id

      t.timestamps
    end
  end
end
