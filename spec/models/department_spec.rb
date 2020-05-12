require 'rails_helper'

describe Department do
  let(:department) { build :department }

  describe 'factories' do
    it 'are valid' do
      expect(department).to be_valid
    end
  end

  describe 'validations' do
    describe 'for name' do
      it 'is invalid when blank' do
        [nil, ''].each do |invalid_name|
          department.name =  invalid_name
          expect(department).to be_invalid
        end
      end
    end
  end

  describe 'associations' do
    let(:department) { create :department }

    describe '#products' do
      let(:product) { create :product, department: department }

      it 'return products' do
        expect(department.products).to match_array(product)
      end
    end
  end
end