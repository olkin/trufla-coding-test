require 'rails_helper'

describe Department do
  let(:department) { build :department }

  describe 'factories' do
    it 'are valid' do
      expect(department).to be_valid
    end
  end

  describe 'validations' do
    context 'when there is no name' do
      it 'is invalid' do
        [nil, ''].each do |invalid_name|
          department.name =  invalid_name
          expect(department).to be_invalid
        end
      end
    end
  end
end