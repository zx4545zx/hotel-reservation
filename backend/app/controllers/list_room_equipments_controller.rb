class ListRoomEquipmentsController < ApplicationController
  before_action :set_list_room_equipment, only: %i[ show update destroy ]

  def index
    @list_room_equipments = ListRoomEquipment.all

    render json: @list_room_equipments
  end

  def show
    render json: @list_room_equipment
  end

  def create
    @list_room_equipment = ListRoomEquipment.new(list_room_equipment_params)

    if @list_room_equipment.save
      render json: @list_room_equipment
    else
      render json: @list_room_equipment.errors, status: :unprocessable_entity
    end
  end

  def update
    if @list_room_equipment.update(list_room_equipment_params)
      render json: @list_room_equipment
    else
      render json: @list_room_equipment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @list_room_equipment.destroy
  end

  private
    def set_list_room_equipment
      @list_room_equipment = ListRoomEquipment.find(params[:id])
    end

    def list_room_equipment_params
      params.require(:list_room_equipment).permit(:room_id, :equipmentsroom_id)
    end
end
