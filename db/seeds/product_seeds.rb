Department.all.find_each do |department|
  7.times do |product_number|
    department.products.find_or_create_by!(name: "Product ##{product_number}") do |product|
      product.price = rand(100_000) * rand
    end
  end
end