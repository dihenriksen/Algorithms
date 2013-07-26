class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email
      t.string :salt
      t.string :fish
      t.string :arrays
      t.timestamp :created_at
      t.timestamp :updated_at
      t.boolean :is_superuser, default: false

      t.timestamps
    end
  end
end
