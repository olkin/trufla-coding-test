class CreateProductsPromotionsJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :products, :promotions
  end
end
