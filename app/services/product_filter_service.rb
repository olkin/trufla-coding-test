class ProductFilterService
  AVAILABLE_FILTERS = ['department_id', 'active_promo_code', 'product_name']

  def initialize(filters = {})
    @products = Product.all
    set_filters(filters)
  end

  def results
    filters.each { |filter, filter_value| send(filter, filter_value) }
    products
  end

  private

  attr_reader :products, :filters

  def set_filters(new_filters)
    @filters ||= new_filters
                     .slice(*AVAILABLE_FILTERS)
                     .reject{|_filter, filter_value| filter_value.blank?}
                     .map{|filter, filter_value| ["filter_by_#{filter}", filter_value] }
  end

  def filter_by_department_id(department_ids)
    @products = @products.where(department_id: department_ids)
  end

  def filter_by_active_promo_code(promo_code)
    @products = @products.includes(:promotions).where(promotions: { code: promo_code, active: true })
  end

  def filter_by_product_name(product_name)
    @products = @products.where('name LIKE ?', "%#{product_name}%")
  end
end