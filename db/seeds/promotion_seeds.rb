13.times do |promotion_number|
  Promotion.find_or_create_by!(code: Faker::Commerce.promotion_code) do |promotion|
    promotion.discount = (rand(100) * rand).round(2)
    promotion.discount = 1 if promotion.discount == 0
    promotion.active = promotion_number % 2 == 0
  end
end