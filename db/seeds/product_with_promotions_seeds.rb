active_promotion = Promotion.active.last
active_promotion2 = Promotion.active.first
deactivated_promotion = Promotion.deactivated.last

Product.all.find_each do |product|
  next if product.promotions.any?

  if deactivated_promotion && product.id % 15 == 0
    product.promotions << deactivated_promotion
    next
  end

  if active_promotion && product.id % 6 == 0
    product.promotions << active_promotion
    next
  end

  if active_promotion2 && product.id % 5 == 0
    product.promotions << active_promotion2
    next
  end
end