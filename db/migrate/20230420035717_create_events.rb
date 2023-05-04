class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :title
      t.string :event_description
      t.integer :price
      t.string :location
      t.string :organizer
      t.string :date

      t.timestamps
    end
  end
end
