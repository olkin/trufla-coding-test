Department.all.find_each do |department|
  7.times do
    department.products.find_or_create_by!(name: Faker::Commerce.product_name) do |product|
      product.price = Faker::Commerce.price
    end
  end
end