class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.integer :album_id, null: false
      t.string :song, null: false
      t.integer :ord, null: false
      t.boolean :bonus, default: false, null: false
      t.text :lyrics, null: false

      t.timestamps null: false
    end

    add_index :tracks, [:album_id, :ord], unique: true
  end
end
