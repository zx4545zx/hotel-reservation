class EquipmentsroomsController < ApplicationController
  before_action :set_equipmentsroom, only: %i[ show update destroy ]

  # GET /equipmentsrooms
  def index
    @equipmentsrooms = Equipmentsroom.all

    render json: @equipmentsrooms
  end

  # GET /equipmentsrooms/1
  def show
    render json: @equipmentsroom
  end

  # POST /equipmentsrooms
  def create
    @equipmentsroom = Equipmentsroom.new(equipmentsroom_params)

    if @equipmentsroom.save
      render json: @equipmentsroom, status: :created, location: @equipmentsroom
    else
      render json: @equipmentsroom.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /equipmentsrooms/1
  def update
    if @equipmentsroom.update(equipmentsroom_params)
      render json: @equipmentsroom
    else
      render json: @equipmentsroom.errors, status: :unprocessable_entity
    end
  end

  # DELETE /equipmentsrooms/1
  def destroy
    @equipmentsroom.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_equipmentsroom
      @equipmentsroom = Equipmentsroom.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def equipmentsroom_params
      params.require(:equipmentsroom).permit(:name, :price)
    end
end
