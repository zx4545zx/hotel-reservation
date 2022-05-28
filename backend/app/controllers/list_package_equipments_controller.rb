class ListPackageEquipmentsController < ApplicationController
  before_action :set_list_package_equipment, only: %i[ show update destroy ]

  # GET /list_package_equipments
  def index
    @list_package_equipments = ListPackageEquipment.all

    render json: @list_package_equipments
  end

  # GET /list_package_equipments/1
  def show
    render json: @list_package_equipment
  end

  # POST /list_package_equipments
  def create
    @list_package_equipment = ListPackageEquipment.new(list_package_equipment_params)

    if @list_package_equipment.save
      render json: @list_package_equipment, status: :created, location: @list_package_equipment
    else
      render json: @list_package_equipment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /list_package_equipments/1
  def update
    if @list_package_equipment.update(list_package_equipment_params)
      render json: @list_package_equipment
    else
      render json: @list_package_equipment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /list_package_equipments/1
  def destroy
    @list_package_equipment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_list_package_equipment
      @list_package_equipment = ListPackageEquipment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def list_package_equipment_params
      params.require(:list_package_equipment).permit(:packages_id, :equipments_id, :value)
    end
end
