class CreatePromotions < ActiveRecord::Migration[5.2]
  def change
    create_table :promotions do |t|
      t.string :code
      t.boolean :active
      t.decimal :discount

      t.timestamps
    end
  end
end
