class Api::V1::ProductsController < Api::V1::BaseController
  PER_PAGE = 20

  def index
    @products = Product.order(created_at: :desc).page(params[:page]).per(PER_PAGE)

    render json: { products: @products.as_json(include: :active_promotions), meta: { total_count: @products.total_count, limit: PER_PAGE}}
  end
end