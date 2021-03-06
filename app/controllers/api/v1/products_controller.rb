class Api::V1::ProductsController < ApplicationController
  PER_PAGE = 20

  def index
    @products = ProductFilterService.new(filter_params).results
    @products = @products.order(created_at: :desc)
    @products = @products.includes(:active_promotions, :department)
    @products = @products.page(params[:page]).per(PER_PAGE)

    render json: {
        products: @products.as_json(include: [:department, :active_promotions]),
        meta:     { total_count: @products.total_count, limit: PER_PAGE }
    }
  end

  private

  def filter_params
    params.permit(:page, :department_id, :active_promo_code, :product_name)
        .slice(:department_id, :active_promo_code, :product_name).to_h
  end
end