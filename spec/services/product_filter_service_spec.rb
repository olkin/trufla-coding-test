require 'rails_helper'

describe ProductFilterService do
  let(:params) { {} }

  describe '#results' do
    subject { described_class.new(params).results }

    let(:department) { create :department }
    let!(:product) { create :product, name: 'Very unusual product' }
    let!(:product_from_department) { create :product, department: department, name: 'Regular product' }

    it { is_expected.to contain_exactly(product, product_from_department)}

    describe 'filters by department_id' do
      let(:params) { { 'department_id' => department.id } }

      it { is_expected.to contain_exactly(product_from_department)}
    end

    describe 'filters by product_name' do
      let(:params) { { 'product_name' => 'usual' } }

      it { is_expected.to contain_exactly(product) }
    end

    describe 'filters by promotion_code' do
      let(:promotion) { create :promotion, code: 'apply me' }
      let(:params) { { 'active_promo_code' => 'apply me' } }

      before do
        product.promotions << promotion
      end

      it { is_expected.to contain_exactly(product) }

      context 'when promotion is not active' do
        before do
          promotion.update(active: false)
        end

        it { is_expected.to be_empty }
      end
    end

    describe 'multiple filters' do
      let(:service) { described_class.new(params) }

      let(:params) { { 'department_id' => 13,
                       'product_name' => 'Regular',
                       'active_promo_code' => 'abc',
                       'phantom_filter' => 'I do not exist'
      } }

      it 'is calling all the filters' do
        expect(service).to receive(:filter_by_department_id).with(13)
        expect(service).to receive(:filter_by_product_name).with('Regular')
        expect(service).to receive(:filter_by_active_promo_code).with('abc')

        expect { service.results }.not_to raise_error
      end
    end
  end
end