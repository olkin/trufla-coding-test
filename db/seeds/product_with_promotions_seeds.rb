active_promotion = Promotion.active.last
active_promotion2 = Promotion.active.first
deactivated_promotion = Promotion.deactivated.last

Product.all.find_each do |product|
  if deactivated_promotion && product.id % 15 == 0 && !product.promotions.exists?(deactivated_promotion.id)
    product.promotions << deactivated_promotion
    next
  end

  if active_promotion && product.id % 6 == 0 && !product.promotions.exists?(active_promotion.id)
    product.promotions << active_promotion
    next
  end

  if active_promotion2 && product.id % 5 == 0 && !product.promotions.exists?(active_promotion2.id)
    product.promotions << active_promotion2
    next
  end
end