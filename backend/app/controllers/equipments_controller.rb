class EquipmentsController < ApplicationController
  before_action :set_equipment, only: %i[ show update destroy ]

  def index
    @equipments = Equipment.all
    render json: @equipments, include: [ :packages ]
  end

  def show
    render json: @equipment, include: [ :packages ]
  end

  def create
    @equipment = Equipment.new(equipment_params)

    if @equipment.save
      render json: @equipment
    else
      render json: @equipment.errors, status: :unprocessable_entity
    end
  end

  def update
    if @equipment.update(equipment_params)
      render json: @equipment
    else
      render json: @equipment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @equipment.destroy
  end

  private
    def set_equipment
      @equipment = Equipment.find(params[:id])
    end

    def equipment_params
      params.require(:equipment).permit(:name, :price)
    end
end
