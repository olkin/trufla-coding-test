class Api::V1::ProductsController < Api::V1::BaseController
  PER_PAGE = 20

  def index
    @products = ProductFilterService.new.filter(filter_params)
    @products = @products.order(created_at: :desc)
    @products = @products.includes(:active_promotions, :department)
    @products = @products.page(params[:page]).per(PER_PAGE)

    render json: { products: @products.as_json(include: [:department, :active_promotions]),
                   meta: { total_count: @products.total_count, limit: PER_PAGE}}
  end

  private

  def filter_params
    params.slice(:department_id, :promo_code, :product_name)
  end
end