class StaffsController < ApplicationController
  before_action :set_staff, only: %i[ show update destroy ]

  # POST Login
  def login
    staff = Staff.find_by_email(params[:email])
    staff.update(status: 'online')

    role = staff.role
    department = role.department
    position = role.position

    if staff.password == params[:password]
      render json: { staff: staff, role: role, department: department, position: position }
    else
      render json: staff.errors, status: :unprocessable_entity
    end
  end

  # GET /staffs
  def index
    @staffs = Staff.order(id: :asc)

    render json: @staffs, include: [ :role, :department, :position ]
  end

  # GET /staffs/1
  def show
    render json: @staff, include: [ :role, :department, :position ]
  end

  # POST /staffs
  def create
    @staff = Staff.new(staff_params)

    if @staff.save
        render json: @staff, include: [ :role, :department, :position ]
    else
      render json: @staff.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /staffs/1
  def update
    if @staff.update(staff_params)
      render json: @staff, include: [ :role, :department, :position ]
    else
      render json: @staff.errors, status: :unprocessable_entity
    end
  end

  # DELETE /staffs/1
  def destroy
    @staff.destroy

    render json: @staff
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_staff
      @staff = Staff.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def staff_params
      params.require(:staff).permit(
        :first_name, :last_name, :phone_number,
        :email, :password, :status, :role_id,
        role_attributes: [:department_id, :position_id,
          :acess_reserv, :acess_quot, :acess_cust, :acess_meet,
          :acess_meet_equi, :acess_meet_ser, :acess_room,
          :acess_room_type, :acess_bed_type, :acess_room_equi,
          :acess_room_ser, :acess_room_add_on_ser,
          :acess_package, :acess_staff,
        ]
      )
    end
end
