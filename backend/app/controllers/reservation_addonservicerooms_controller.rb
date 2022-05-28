class ReservationAddonserviceroomsController < ApplicationController
  before_action :set_reservation_addonserviceroom, only: %i[ show update destroy ]

  # GET /reservation_addonservicerooms
  def index
    @reservation_addonservicerooms = ReservationAddonserviceroom.all

    render json: @reservation_addonservicerooms
  end

  # GET /reservation_addonservicerooms/1
  def show
    render json: @reservation_addonserviceroom
  end

  # POST /reservation_addonservicerooms
  def create
    @reservation_addonserviceroom = ReservationAddonserviceroom.new(reservation_addonserviceroom_params)

    if @reservation_addonserviceroom.save
      render json: @reservation_addonserviceroom, status: :created, location: @reservation_addonserviceroom
    else
      render json: @reservation_addonserviceroom.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reservation_addonservicerooms/1
  def update
    if @reservation_addonserviceroom.update(reservation_addonserviceroom_params)
      render json: @reservation_addonserviceroom
    else
      render json: @reservation_addonserviceroom.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reservation_addonservicerooms/1
  def destroy
    @reservation_addonserviceroom.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reservation_addonserviceroom
      @reservation_addonserviceroom = ReservationAddonserviceroom.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def reservation_addonserviceroom_params
      params.require(:reservation_addonserviceroom).permit(:reservation_id, :addonserviceroom_id, :amount)
    end
end
