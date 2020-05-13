class ProductFilterService
  attr_reader :products

  def initialize
    @products = Product.all
  end

  def filter(params)
    params.each do |param_name, param_value|
      send("filter_by_#{param_name}", param_value)
    end

    @products
  end

  private

  def filter_by_department_id(department_ids)
    return if department_ids.blank?

    @products = @products.where(department_id: department_ids)
  end

  def filter_by_active_promo_code(promo_code)
    return if promo_code.blank?

    @products = @products.includes(:promotions).where(promotions: { code: promo_code, active: true })
  end

  def filter_by_product_name(product_name)
    return if product_name.blank?

    @products = @products.where('name LIKE ?', "%#{product_name}%")
  end
end