class CreatePromotions < ActiveRecord::Migration[5.2]
  def change
    create_table :promotions do |t|
      t.string :code, null: false
      t.boolean :active
      t.decimal :discount, null: false

      t.timestamps
    end
  end
end
