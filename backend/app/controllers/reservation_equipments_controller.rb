class ReservationEquipmentsController < ApplicationController
  before_action :set_reservation_equipment, only: %i[ show update destroy ]

  # GET /reservation_equipments
  def index
    @reservation_equipments = ReservationEquipment.all

    render json: @reservation_equipments
  end

  # GET /reservation_equipments/1
  def show
    render json: @reservation_equipment
  end

  # POST /reservation_equipments
  def create
    @reservation_equipment = ReservationEquipment.new(reservation_equipment_params)

    if @reservation_equipment.save
      render json: @reservation_equipment, status: :created, location: @reservation_equipment
    else
      render json: @reservation_equipment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reservation_equipments/1
  def update
    if @reservation_equipment.update(reservation_equipment_params)
      render json: @reservation_equipment
    else
      render json: @reservation_equipment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reservation_equipments/1
  def destroy
    @reservation_equipment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reservation_equipment
      @reservation_equipment = ReservationEquipment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def reservation_equipment_params
      params.require(:reservation_equipment).permit(:reservation_id, :equipment_id)
    end
end
