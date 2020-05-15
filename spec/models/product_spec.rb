require 'rails_helper'

describe Product do
  let(:product) { build :product }

  describe 'factories' do
    it 'are valid' do
      expect(product).to be_valid
    end
  end

  describe 'validations' do
    describe 'for name' do
      it 'is invalid when empty' do
        [nil, ''].each do |invalid_name|
          product.name =  invalid_name
          expect(product).to be_invalid
        end
      end
    end

    context 'for price' do
      it 'is invalid for negative price' do
        [-1, -0.01].each do |invalid_price|
          product.price =  invalid_price
          expect(product).to be_invalid
        end
      end

      it 'is valid for non-negative price' do
        [0.01, 0, 10_000.99].each do |valid_price|
          product.price =  valid_price
          expect(product).to be_valid
        end
      end

      it 'is valid without price' do
        [nil].each do |valid_price|
          product.price =  valid_price
          expect(product).to be_valid
        end
      end
    end

    context 'for department' do
      it 'is invalid when empty' do
        product.department = nil
        expect(product).to be_invalid
      end
    end
  end

  describe 'associations' do
    describe '#department' do
      subject { product.department }

      it { is_expected.to be_a Department }
    end

    describe '#active_promotions' do
      let(:product) { create :product }
      let(:active_promotion) { create :promotion }
      let(:new_active_promotion) { create :promotion }
      let(:deactivated_promotion) { create :promotion, :deactivated }

      before do
        product.promotions << deactivated_promotion
        product.promotions << new_active_promotion
        product.promotions << active_promotion
      end

      it 'returns only active promotions' do
        expect(product.promotions).to match_array([new_active_promotion, active_promotion, deactivated_promotion])
        expect(product.active_promotions).to match_array([active_promotion, new_active_promotion])
      end
    end
  end
end