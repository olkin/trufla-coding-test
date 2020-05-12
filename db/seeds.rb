[
    'department_seeds.rb',
    'product_seeds.rb',
    'promotion_seeds.rb'
].each do |seed_name|
  load File.join(Rails.root, 'db', 'seeds', seed_name)
end