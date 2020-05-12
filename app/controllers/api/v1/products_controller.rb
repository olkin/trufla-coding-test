class Api::V1::ProductsController < Api::V1::BaseController
  def index
    @products = Product.order(created_at: :desc)

    render json: @products
  end
end