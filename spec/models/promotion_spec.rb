require 'rails_helper'

describe Promotion do
  let(:promotion) { build :promotion }
  let(:deactivated_promotion) { build :promotion, :deactivated }

  describe 'factories' do
    it 'are valid' do
      [promotion, deactivated_promotion].each do |promotion_object|
        expect(promotion_object).to be_valid
      end
    end
  end

  describe 'validations' do
    describe 'for code' do
      it 'is invalid when empty' do
        [nil, ''].each do |invalid_code|
          promotion.code =  invalid_code
          expect(promotion).to be_invalid
        end
      end
    end

    context 'for discount' do
      it 'is invalid for negative value' do
        [-1, -0.01].each do |invalid_discount|
          promotion.discount =  invalid_discount
          expect(promotion).to be_invalid
        end
      end

      it 'is invalid for values > 100' do
        [100.01, 150].each do |invalid_discount|
          promotion.discount =  invalid_discount
          expect(promotion).to be_invalid
        end
      end

      it 'is valid for non-negative values under 100' do
        [0.01, 100, 56].each do |valid_discount|
          promotion.discount =  valid_discount
          expect(promotion).to be_valid
        end
      end

      it 'is invalid without discount' do
        [nil].each do |invalid_discount|
          promotion.discount =  invalid_discount
          expect(promotion).to be_invalid
        end
      end
    end
  end
end