class Api::V1::DepartmentsController < Api::V1::BaseController
  def index
    # Hopefully not that many departments
    @departments = Department.all
    render json: @departments
  end
end