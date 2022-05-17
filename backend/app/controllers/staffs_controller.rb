class StaffsController < ApplicationController
  before_action :set_staff, only: %i[ show update destroy ]

  # POST Log index
  def login
    staff = Staff.find_by_email(params[:email])
    if staff.password == params[:password]
      render json: staff
    else
      render json: staff.errors, status: :unprocessable_entity
    end
  end

  # GET /staffs
  def index
    @staffs = Staff.all

    render json: @staffs
  end

  # GET /staffs/1
  def show
    render json: @staff
  end

  # POST /staffs
  def create
    @staff = Staff.new(staff_params)

    if @staff.save
      render json: @staff
    else
      render json: @staff.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /staffs/1
  def update
    if @staff.update(staff_params)
      render json: @staff
    else
      render json: @staff.errors, status: :unprocessable_entity
    end
  end

  # DELETE /staffs/1
  def destroy
    @staff.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_staff
      @staff = Staff.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def staff_params
      params.require(:staff).permit(:first_name, :last_name, :phone_number, :email, :password, :status)
    end
end
