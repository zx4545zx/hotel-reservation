class EquipmentsroomsController < ApplicationController
  before_action :set_equipmentsroom, only: %i[ show update destroy ]

  def index
    @equipmentsrooms = Equipmentsroom.all
    render json: @equipmentsrooms
  end

  def show
    render json: @equipmentsroom
  end

  def create
    @equipmentsroom = Equipmentsroom.new(equipmentsroom_params)

    if @equipmentsroom.save
      render json: @equipmentsroom
    else
      render json: @equipmentsroom.errors, status: :unprocessable_entity
    end
  end

  def update
    if @equipmentsroom.update(equipmentsroom_params)
      render json: @equipmentsroom
    else
      render json: @equipmentsroom.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @equipmentsroom.destroy
  end

  private
    def set_equipmentsroom
      @equipmentsroom = Equipmentsroom.find(params[:id])
    end

    def equipmentsroom_params
      params.require(:equipmentsroom).permit(:name, :price)
    end
end
