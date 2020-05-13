class Api::V1::DepartmentsController < ApplicationController
  def index
    # Hopefully not that many departments
    @departments = Department.all
    render json: @departments
  end
end