require 'rails_helper'

describe Api::V1::ProductsController do
  describe 'GET #index' do
    let(:params) { { page: 1, department_id: 17, active_promo_code: 13, product_name: 'some name' } }
    let!(:product) { create :product, name: 'Lottery ticket', price: 123.99 }
    let!(:filter_service) { instance_double(ProductFilterService) }

    it 'returns JSON body with corresponding attributes' do
      expect(ProductFilterService).to receive(:new).with({ 'department_id'     => '17',
                                                           'active_promo_code' => '13',
                                                           'product_name'      => 'some name' }) { filter_service }

      allow(filter_service).to receive(:results) { Product.all }

      get :index, params: params

      expect(response).to have_http_status(:success)
      json_response = JSON.parse(response.body)
      expect(json_response['meta']).to include("limit"=>20, "total_count"=>1)
      json_product = json_response['products'].first
      puts json_product.inspect
      expect(json_product).to include('id', 'department', 'active_promotions')
      expect(json_product).to include('name' => 'Lottery ticket', 'price' => '123.99' )
    end
  end
end