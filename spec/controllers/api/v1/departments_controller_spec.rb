require 'rails_helper'

describe Api::V1::DepartmentsController do
  describe 'GET #index' do
    let!(:department_z) { create :department, name: 'ZXY' }
    let!(:department_a) { create :department, name: 'ABC' }

    before do
      get :index
    end

    it 'returns all departments in alphabetical order' do
      expect(response).to have_http_status(:success)
      json_response = JSON.parse(response.body)

      expect(json_response[0]).to include('name' => 'ABC', 'id' => department_a.id)
      expect(json_response[1]).to include('name' => 'ZXY', 'id' => department_z.id)
    end
  end
end