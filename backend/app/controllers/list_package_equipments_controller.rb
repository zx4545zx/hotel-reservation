class ListPackageEquipmentsController < ApplicationController
  before_action :set_list_package_equipment, only: %i[ show update destroy ]

  def index
    @list_package_equipments = ListPackageEquipment.all
    render json: @list_package_equipments
  end

  def show
    render json: @list_package_equipment
  end

  def create
    @list_package_equipment = ListPackageEquipment.new(list_package_equipment_params)

    if @list_package_equipment.save
      render json: @list_package_equipment
    else
      render json: @list_package_equipment.errors, status: :unprocessable_entity
    end
  end

  def update
    if @list_package_equipment.update(list_package_equipment_params)
      render json: @list_package_equipment
    else
      render json: @list_package_equipment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @list_package_equipment.destroy
  end

  private
    def set_list_package_equipment
      @list_package_equipment = ListPackageEquipment.find(params[:id])
    end

    def list_package_equipment_params
      params.require(:list_package_equipment).permit(:packages_id, :equipment_id, :value)
    end
end
