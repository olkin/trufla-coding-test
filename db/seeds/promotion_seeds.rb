13.times do |promotion_number|
  promotion_code = "Promotion number #{promotion_number}"
  Promotion.find_or_create_by!(code: promotion_code) do |promotion|
    promotion.discount = rand(100) * rand
    promotion.active = promotion_number % 2 == 0
  end
end