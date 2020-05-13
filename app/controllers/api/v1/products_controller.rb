class Api::V1::ProductsController < Api::V1::BaseController
  PER_PAGE = 20

  def index
    @products = Product.order(created_at: :desc)
    @products = @products.where(department_id: params[:department_id]) if params[:department_id].present?
    @products = @products.where(promotions: { code: params[:promo_code] }) if params[:promo_code].present?
    @products = @products.includes(:active_promotions, :department)
    @products = @products.page(params[:page]).per(PER_PAGE)

    render json: { products: @products.as_json(include: [:department, :active_promotions]),
                   meta: { total_count: @products.total_count, limit: PER_PAGE}}
  end
end