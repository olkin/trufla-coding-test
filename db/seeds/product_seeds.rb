Department.all.each do |department|
  7.times do |product_number|
    department.products.find_or_create_by!(name: "Product ##{product_number} From #{department.id}") do |product|
      product.price = product_number * rand(100_000) * rand
    end
  end
end